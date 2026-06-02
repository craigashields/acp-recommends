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
import { Share2, LogOut, Check, Loader2 } from "lucide-react";
import { getOrCreateWishlist } from "@/actions/wishlist";

export function HeaderAuth() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { openSignIn, signOut } = useClerk();
  const [open, setOpen] = useState(false);
  const [shareState, setShareState] = useState<"idle" | "loading" | "copied">("idle");

  if (!isLoaded) {
    // Reserve space to prevent layout shift while Clerk hydrates
    return <div className="h-11 w-11" />;
  }

  if (!isSignedIn) {
    return (
      <Button variant="outline" size="sm" onClick={() => openSignIn()}>
        Sign in
      </Button>
    );
  }

  async function handleShareWishlist() {
    if (shareState !== "idle") return;
    setShareState("loading");
    try {
      const wishlist = await getOrCreateWishlist();
      const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin}/wishlist/${wishlist.share_slug}`;
      await navigator.clipboard.writeText(url);
      setShareState("copied");
      setTimeout(() => {
        setShareState("idle");
        setOpen(false);
      }, 1500);
    } catch {
      setShareState("idle");
      setOpen(false);
    }
  }

  const initials = user.firstName
    ? `${user.firstName[0]}${user.lastName?.[0] ?? ""}`.toUpperCase()
    : (user.username?.[0] ?? "U").toUpperCase();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        {/* 44×44px touch target (h-11 w-11) per Apple HIG / Material guidelines */}
        <button
          aria-label="Account menu"
          className="relative h-11 w-11 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-primary/50 focus-visible:ring-primary transition-all focus:outline-none"
        >
          {user.imageUrl ? (
            <img
              src={user.imageUrl}
              alt={user.fullName ?? "Account"}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-muted flex items-center justify-center text-sm font-semibold">
              {initials}
            </div>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        collisionPadding={16}
        className="w-56"
      >
        {/* User info header */}
        <div className="px-3 py-2">
          <p className="text-sm font-medium truncate">
            {user.firstName
              ? `${user.firstName}${user.lastName ? ` ${user.lastName}` : ""}`
              : (user.username ?? "Account")}
          </p>
          {user.primaryEmailAddress && (
            <p className="text-xs text-muted-foreground truncate">
              {user.primaryEmailAddress.emailAddress}
            </p>
          )}
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="gap-2 cursor-pointer"
          onSelect={(e) => e.preventDefault()}
          onClick={handleShareWishlist}
          disabled={shareState === "loading"}
        >
          {shareState === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Copying link…
            </>
          ) : shareState === "copied" ? (
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
          className="gap-2 cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
          onClick={() => signOut()}
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
