import type { Comic } from "@/types/database";
import { ComicCard } from "@/components/comic-card";
import { Filters } from "@/components/filters";
import { ShareButton } from "@/components/share-button";
import { AnimatedCard } from "@/components/animation-card";
import { AnimatePresence } from "framer-motion";

interface WishlistPageProps {
  comics: Comic[];
  ownerName: string;
  isOwner: boolean;
  shareSlug?: string;
  wishlistComicIds?: number[];
  episodes: number[];
  recommenders: string[];
}

export function WishlistPage({
  comics,
  ownerName,
  isOwner,
  shareSlug,
  wishlistComicIds,
  episodes,
  recommenders,
}: WishlistPageProps) {
  return (
    <div className="py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{ownerName}&apos;s Wishlist</h1>
          <p className="text-sm text-muted-foreground">
            {comics.length} comic{comics.length !== 1 ? "s" : ""}
          </p>
        </div>
        {isOwner && shareSlug && (
          <ShareButton
            shareUrl={`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/wishlist/${shareSlug}`}
          />
        )}
      </div>

      <Filters episodes={episodes} recommenders={recommenders} />

      {comics.length === 0 ? (
        <div className="mt-12 text-center text-muted-foreground">
          {isOwner
            ? "No comics on your wishlist yet. Browse the gallery and click the heart icon to add some!"
            : "This wishlist is empty."}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {comics.map((comic) => (
              <AnimatedCard key={comic.id}>
                <ComicCard
                  comic={comic}
                  wishlistState={
                    isOwner
                      ? {
                          isWishlisted:
                            wishlistComicIds?.includes(comic.id) ?? true,
                        }
                      : undefined
                  }
                />
              </AnimatedCard>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
