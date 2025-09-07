"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Search } from "@/components/search";

//
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
}

export function Filters({ episodes, recommenders }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const currentEpisode = searchParams.get("episode");
  const currentRecommender = searchParams.get("recommender");

  // Ensure hosts appear first in recommender dropdown, guests alphabetical
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

    // Reset page when filters change
    params.delete("page");

    if (value && value != "all") {
      params.set(type, value);
    } else {
      params.delete(type);
    }

    startTransition(() => {
      router.push(`/?${params.toString()}`);
    });
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
          onValueChange={(recommender) =>
            updateFilter("recommender", recommender)
          }
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
    </div>
  );
}
