"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { Search } from "@/components/search";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

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

  // With the wishlist toggle present we need a tablet-specific 2×2 grid:
  //   Row 1: Search | Wishlist
  //   Row 2: Episode | Recommender
  // DOM order is Search → Episode → Recommender → Wishlist, so we use
  // sm:order-* to rearrange at the tablet breakpoint without touching desktop.
  const hasToggle = showWishlistToggle;

  return (
    <div
      className={[
        "flex flex-col gap-4 mb-6 items-stretch",
        hasToggle
          ? "sm:grid sm:grid-cols-[1fr_auto] lg:flex lg:flex-row lg:items-center"
          : "md:flex-row md:items-center",
      ].join(" ")}
    >
      {/* Search — row 1 col 1 on tablet, flex-1 on desktop */}
      <div className="w-full lg:flex-1">
        <Search />
      </div>

      {/* Episode — row 2 col 1 on tablet (order-3), w-48 on desktop (order-2) */}
      <div className={`w-full lg:w-48 ${hasToggle ? "sm:order-3 sm:w-48 lg:order-2" : ""}`}>
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

      {/* Recommender — row 2 col 2 on tablet (order-4), w-48 on desktop (order-3) */}
      <div className={`w-full lg:w-48 ${hasToggle ? "sm:order-4 sm:w-48 lg:order-3" : ""}`}>
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

      {/* Wishlist toggle — row 1 col 2 on tablet (order-2), last on desktop (order-4) */}
      {showWishlistToggle && (
        <Button
          variant={wishlistActive ? "default" : "outline"}
          onClick={toggleWishlist}
          className="w-full lg:w-auto gap-2 sm:order-2 lg:order-4"
        >
          <Heart className={`h-4 w-4 ${wishlistActive ? "fill-current" : ""}`} />
          My Wishlist
        </Button>
      )}
    </div>
  );
}
