"use server";
import { supabaseAdmin as supabase } from "@/lib/supabase-server";
import { unstable_cache } from "next/cache";
import type { Comic } from "@/types/database";

export type ComicsQuery = {
  search?: string;
  episode?: string;
  recommender?: string;
  limit: number;
  offset: number;
  comicIds?: number[]; // when set, restricts results to these IDs (bypasses cache)
};

type ComicsResult = {
  items: Comic[];
  total: number;
};

async function fetchComics(params: ComicsQuery): Promise<ComicsResult> {
  const { search, episode, recommender, limit, offset, comicIds } = params;

  // If filtering by IDs and list is empty, return early (nothing to show)
  if (comicIds !== undefined && comicIds.length === 0) {
    return { items: [], total: 0 };
  }

  let query = supabase
    .from("acp_recommendsv2")
    .select("*", { count: "exact" })
    .order("episode", { ascending: false })
    .order("id", { ascending: true });

  if (comicIds !== undefined) {
    query = query.in("id", comicIds);
  }

  if (episode) {
    const epNum = Number(episode);
    if (!Number.isNaN(epNum)) {
      query = query.eq("episode", epNum);
    }
  }

  if (recommender) {
    query = query.ilike("recommended_by", recommender);
  }

  if (search) {
    const term = `%${search}%`;
    query = query.or(`title.ilike.${term},recommended_by.ilike.${term}`);
  }

  query = query.range(offset, Math.max(offset, offset + limit - 1));

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching comics:", error);
    return { items: [], total: 0 };
  }

  return { items: (data as Comic[]) ?? [], total: count ?? 0 };
}

export async function getComics(params: ComicsQuery): Promise<ComicsResult> {
  // User-specific wishlist filters must not be cached
  if (params.comicIds !== undefined) {
    return fetchComics(params);
  }

  const key = [
    "getComics",
    params.search ?? "",
    params.episode ?? "",
    params.recommender ?? "",
    String(params.limit),
    String(params.offset),
  ];

  const fetcher = unstable_cache(() => fetchComics(params), key, {
    tags: ["comics"],
  });

  return fetcher();
}

export async function getFilterOptions(): Promise<{
  episodes: number[];
  recommenders: string[];
}> {
  const fetcher = unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("acp_recommendsv2")
        .select("episode,recommended_by")
        .order("episode", { ascending: false });

      if (error) {
        console.error("Error fetching filter options:", error);
        return { episodes: [], recommenders: [] };
      }

      const episodesSet = new Set<number>();
      const recommendersSet = new Set<string>();
      for (const row of data ?? []) {
        if (typeof row.episode === "number") episodesSet.add(row.episode);
        if (typeof row.recommended_by === "string")
          recommendersSet.add(row.recommended_by);
      }

      const episodes = Array.from(episodesSet).sort((a, b) => b - a);
      const recommenders = Array.from(recommendersSet).sort((a, b) =>
        a.localeCompare(b)
      );

      return { episodes, recommenders };
    },
    ["getFilterOptions"],
    { tags: ["comics"] }
  );

  return fetcher();
}
