"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";
import { addToWishlist, removeFromWishlist } from "@/actions/wishlist";

interface WishlistButtonProps {
  comicId: number;
  isWishlisted: boolean;
}

export function WishlistButton({ comicId, isWishlisted }: WishlistButtonProps) {
  const [wishlisted, setWishlisted] = useState(isWishlisted);
  const [loading, setLoading] = useState(false);

  // Sync with server state after router.refresh() — if the server action
  // failed silently, the prop will revert and the heart will refill.
  useEffect(() => {
    setWishlisted(isWishlisted);
  }, [isWishlisted]);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();

  async function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (!isSignedIn) {
      openSignIn();
      return;
    }

    const next = !wishlisted;
    setWishlisted(next); // optimistic update
    setLoading(true);

    try {
      if (next) {
        await addToWishlist(comicId);
      } else {
        await removeFromWishlist(comicId);
      }
      router.refresh(); // re-render server components with fresh wishlist data
    } catch {
      setWishlisted(!next); // revert on error
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 disabled:opacity-50"
    >
      <Heart
        className={`h-4 w-4 transition-colors ${
          wishlisted ? "fill-rose-500 text-rose-500" : "fill-none"
        }`}
      />
    </button>
  );
}
