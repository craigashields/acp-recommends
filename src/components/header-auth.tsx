"use client";

import { useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Share2, LogOut, Check } from "lucide-react";
import { getOrCreateWishlist } from "@/actions/wishlist";

export function HeaderAuth() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { openSignIn, signOut } = useClerk();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return (
      <Button variant="outline" size="sm" onClick={() => openSignIn()}>
        Sign in
      </Button>
    );
  }

  async function handleShareWishlist() {
    try {
      const wishlist = await getOrCreateWishlist();
      const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin}/wishlist/${wishlist.share_slug}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1500);
    } catch {
      setOpen(false);
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full h-8 w-8 overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all focus:outline-none focus-visible:ring-primary">
          {user.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.fullName ?? "Account"}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-muted flex items-center justify-center text-sm font-medium">
              {user.firstName?.[0] ?? "U"}
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <div className="px-2 py-1.5 text-sm font-medium truncate">
          {user.firstName ?? user.username ?? "Account"}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onSelect={(e) => e.preventDefault()}
          onClick={handleShareWishlist}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4" />
              Share Wishlist
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="gap-2 cursor-pointer text-destructive focus:text-destructive"
          onClick={() => signOut()}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
