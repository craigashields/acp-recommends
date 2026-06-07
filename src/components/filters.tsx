"use client";

import { useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";
import { Search } from "@/components/search";
import { Heart, Share2, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getOrCreateWishlist } from "@/actions/wishlist";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

interface FiltersProps {
  episodes: number[];
  recommenders: string[];
  showWishlistToggle?: boolean;
}

export function Filters({
  episodes,
  recommenders,
  showWishlistToggle = false,
}: FiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useClerk();
  const [shareState, setShareState] = useState<"idle" | "loading" | "copied">("idle");
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [displayNameInput, setDisplayNameInput] = useState("");
  const [savingName, setSavingName] = useState(false);

  const currentEpisode = searchParams.get("episode");
  const currentRecommender = searchParams.get("recommender");
  const wishlistActive = searchParams.get("wishlistOnly") === "true";

  const hosts = ["Dan", "Tony", "Vince"];
  const hostsLower = hosts.map((h) => h.toLowerCase());
  const presentHosts = hosts
    .map((h) => {
      const match = recommenders.find(
        (r) => r.toLowerCase() === h.toLowerCase()
      );
      return match ?? null;
    })
    .filter(Boolean) as string[];
  const guests = recommenders
    .filter((r) => !hostsLower.includes(r.toLowerCase()))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  function updateFilter(type: "episode" | "recommender", value: string | null) {
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (value && value !== "all") {
      params.set(type, value);
    } else {
      params.delete(type);
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }

  function toggleWishlist() {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (wishlistActive) {
      params.delete("wishlistOnly");
    } else {
      params.set("wishlistOnly", "true");
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }

  async function doShare() {
    setShareState("loading");
    try {
      const wishlist = await getOrCreateWishlist();
      const url = `${process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin}/wishlist/${wishlist.share_slug}`;
      await navigator.clipboard.writeText(url);
      setShareState("copied");
      setTimeout(() => setShareState("idle"), 2000);
    } catch {
      setShareState("idle");
    }
  }

  async function handleShare() {
    if (shareState !== "idle") return;
    if (!user?.unsafeMetadata?.displayName) {
      setDisplayNameInput("");
      setShowNameDialog(true);
      return;
    }
    await doShare();
  }

  async function handleSaveAndShare() {
    setSavingName(true);
    try {
      if (displayNameInput.trim()) {
        await user!.update({ unsafeMetadata: { displayName: displayNameInput.trim() } });
      }
    } finally {
      setSavingName(false);
      setShowNameDialog(false);
      await doShare();
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 items-stretch md:items-center">
      <div className="w-full md:flex-1">
        <Search />
      </div>
      <div className="w-full md:w-48">
        <Select
          onValueChange={(episode) => updateFilter("episode", episode)}
          defaultValue={currentEpisode || "all"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by episode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All episodes</SelectItem>
            {episodes.map((episode) => (
              <SelectItem key={episode} value={episode.toString()}>
                Episode {episode}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full md:w-48">
        <Select
          onValueChange={(recommender) => updateFilter("recommender", recommender)}
          defaultValue={currentRecommender || "all"}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by recommender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All recommenders</SelectItem>
            {presentHosts.length > 0 && (
              <>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Hosts</SelectLabel>
                  {presentHosts.map((recommender) => (
                    <SelectItem key={recommender} value={recommender}>
                      {recommender}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </>
            )}
            {guests.length > 0 && (
              <>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Guests</SelectLabel>
                  {guests.map((recommender) => (
                    <SelectItem key={recommender} value={recommender}>
                      {recommender}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </>
            )}
          </SelectContent>
        </Select>
      </div>
      {showWishlistToggle && (
        <div className="flex w-full md:w-auto">
          <Button
            variant={wishlistActive ? "default" : "outline"}
            onClick={toggleWishlist}
            className={`gap-2 flex-1 md:flex-none ${isSignedIn ? "rounded-r-none border-r-0" : ""}`}
          >
            <Heart className={`h-4 w-4 ${wishlistActive ? "fill-current" : ""}`} />
            My Wishlist
          </Button>
          {isSignedIn && (
            <Button
              variant={wishlistActive ? "default" : "outline"}
              size="icon"
              onClick={handleShare}
              disabled={shareState === "loading"}
              aria-label="Copy wishlist share link"
              className="rounded-l-none shrink-0"
            >
              {shareState === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : shareState === "copied" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Share2 className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      )}
      <Dialog open={showNameDialog} onOpenChange={setShowNameDialog}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Name your wishlist</DialogTitle>
            <DialogDescription>
              What should we call your wishlist? This is shown to anyone you share it with.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 py-2">
            <Label htmlFor="display-name">Your name</Label>
            <Input
              id="display-name"
              placeholder="e.g. Craig"
              value={displayNameInput}
              onChange={(e) => setDisplayNameInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSaveAndShare()}
              autoFocus
            />
          </div>
          <DialogFooter className="gap-2">
            <Button variant="ghost" onClick={() => handleSaveAndShare()} disabled={savingName}>
              Skip
            </Button>
            <Button onClick={() => handleSaveAndShare()} disabled={savingName || !displayNameInput.trim()}>
              {savingName ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save & Copy Link"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
