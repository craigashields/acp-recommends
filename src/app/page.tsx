import { auth } from "@clerk/nextjs/server";
import { ComicCard } from "@/components/comic-card";
import { Filters } from "@/components/filters";
import { Comic } from "@/types/database";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { BackToTop } from "@/components/back-to-top";
import { AnimatePresence } from "framer-motion";
import { AnimatedCard } from "@/components/animation-card";
import { getComics, getFilterOptions } from "@/actions/getComics";
import { getMyWishlistComicIds } from "@/actions/wishlist";

const ITEMS_PER_PAGE = 12;

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search?: string;
    page?: string;
    episode?: string;
    recommender?: string;
    wishlistOnly?: string;
  };
}) {
  const { userId } = await auth();

  const search = searchParams.search?.toLowerCase();
  const currentPage = Number(searchParams.page) || 1;
  const episodeFilter = searchParams.episode;
  const recommenderFilter = searchParams.recommender;
  const wishlistOnly = searchParams.wishlistOnly === "true" && !!userId;

  const itemsToShow = currentPage * ITEMS_PER_PAGE;

  const wishlistComicIds = userId ? await getMyWishlistComicIds() : undefined;
  const comicIds = wishlistOnly ? wishlistComicIds : undefined;

  const [{ items: paginatedComics, total }, filterOptions] = await Promise.all([
    getComics({
      search,
      episode: episodeFilter,
      recommender: recommenderFilter,
      limit: wishlistOnly ? 200 : itemsToShow,
      offset: 0,
      comicIds,
    }),
    getFilterOptions(),
  ]);

  const hasNextPage = !wishlistOnly && itemsToShow < total;

  return (
    <>
      <Filters
        episodes={filterOptions.episodes}
        recommenders={filterOptions.recommenders}
        showWishlistToggle={true}
      />

      <div className="min-h-screen bg-background container py-8">
        <main className="">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {paginatedComics.map((comic: Comic) => (
                <AnimatedCard key={comic.id}>
                  <ComicCard
                    comic={comic}
                    wishlistState={{
                      isWishlisted:
                        wishlistComicIds?.includes(comic.id) ?? false,
                    }}
                  />
                </AnimatedCard>
              ))}
            </AnimatePresence>
          </div>
        </main>
        {total === 0 ? (
          <div className="mt-12 text-center text-muted-foreground">
            {wishlistOnly
              ? "No comics on your wishlist yet. Click the heart on any comic to add it."
              : "No awesome comics found. Try different filters or search terms."}
          </div>
        ) : (
          hasNextPage && (
            <div className="mt-8">
              <InfiniteScroll hasNextPage={hasNextPage} />
            </div>
          )
        )}
        <BackToTop />
      </div>
    </>
  );
}
