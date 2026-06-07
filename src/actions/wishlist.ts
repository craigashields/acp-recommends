"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { supabaseAdmin as supabase } from "@/lib/supabase-server";
import type { Wishlist } from "@/types/database";

// ── Internal helpers (not exported) ──────────────────────────────────────────

async function getWishlistForUser(userId: string): Promise<Wishlist | null> {
  const { data } = await supabase
    .from("wishlists")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  return data;
}

async function createWishlistForUser(userId: string): Promise<Wishlist> {
  const { data, error } = await supabase
    .from("wishlists")
    .insert({ user_id: userId })
    .select()
    .single();
  if (error) throw new Error(`Failed to create wishlist: ${error.message}`);
  return data;
}

// ── Exported server actions ───────────────────────────────────────────────────

/** Gets the current user's wishlist, creating it on first use. Auth required. */
export async function getOrCreateWishlist(): Promise<Wishlist> {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const existing = await getWishlistForUser(userId);
  if (existing) return existing;
  return createWishlistForUser(userId);
}

/** Returns the comic IDs on the current user's wishlist. Auth required. */
export async function getMyWishlistComicIds(): Promise<number[]> {
  const { userId } = await auth();
  if (!userId) return [];

  const existing = await getWishlistForUser(userId);
  if (!existing) return [];

  const { data } = await supabase
    .from("wishlist_items")
    .select("comic_id")
    .eq("wishlist_id", existing.id);

  return (data ?? []).map((row) => row.comic_id as number);
}

/** Adds a comic to the current user's wishlist. Duplicate adds are ignored. Auth required. */
export async function addToWishlist(comicId: number): Promise<void> {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const wishlist =
    (await getWishlistForUser(userId)) ?? (await createWishlistForUser(userId));

  const { error } = await supabase
    .from("wishlist_items")
    .insert({ wishlist_id: wishlist.id, comic_id: comicId });

  // Ignore unique constraint violations (comic already in wishlist)
  if (error && !error.message.includes("duplicate")) {
    throw new Error(`Failed to add to wishlist: ${error.message}`);
  }
}

/** Removes a comic from the current user's wishlist. Auth required. */
export async function removeFromWishlist(comicId: number): Promise<void> {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const existing = await getWishlistForUser(userId);
  if (!existing) return;

  const { error } = await supabase
    .from("wishlist_items")
    .delete()
    .eq("wishlist_id", existing.id)
    .eq("comic_id", comicId);

  if (error) throw new Error(`Failed to remove from wishlist: ${error.message}`);
}

/** Returns comic IDs and owner display name for a share slug. No auth required. */
export async function getWishlistBySlug(slug: string): Promise<{
  wishlistComicIds: number[];
  ownerName: string;
  shareSlug: string;
} | null> {
  const { data: wishlist } = await supabase
    .from("wishlists")
    .select("*")
    .eq("share_slug", slug)
    .maybeSingle();

  if (!wishlist) return null;

  const { data: items } = await supabase
    .from("wishlist_items")
    .select("comic_id")
    .eq("wishlist_id", wishlist.id);

  const wishlistComicIds = (items ?? []).map((row) => row.comic_id as number);

  const client = await clerkClient();
  const user = await client.users.getUser(wishlist.user_id);
  const ownerName =
    (user.unsafeMetadata?.displayName as string | undefined) ||
    (user.firstName
      ? `${user.firstName}${user.lastName ? ` ${user.lastName}` : ""}`
      : "") ||
    user.username ||
    "Someone";

  return {
    wishlistComicIds,
    ownerName,
    shareSlug: wishlist.share_slug,
  };
}
