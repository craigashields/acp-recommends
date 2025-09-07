// import HomePage from "../components/home-page";
// import { getComics } from "@/actions/getComics";
// import { SearchParams } from "@/types/general";

// export default async function Page({
//   searchParams,
// }: {
//   searchParams: SearchParams;
// }) {
//   const comics = await getComics(); // Fetch data on the server
//   return <HomePage comics={comics} searchParams={searchParams} />;
// }

import { ComicCard } from "@/components/comic-card";
import { Filters } from "@/components/filters";
import { Comic } from "@/types/database";
import { Search } from "@/components/search";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { BackToTop } from "@/components/back-to-top";
import { AnimatePresence } from "framer-motion";
import { AnimatedCard } from "@/components/animation-card";
import { getComics, getFilterOptions } from "@/actions/getComics";

const ITEMS_PER_PAGE = 12;

export default async function Home({
  searchParams,
}: {
  searchParams: {
    search?: string;
    page?: string;
    episode?: string;
    recommender?: string;
  };
}) {
  const search = searchParams.search?.toLowerCase();
  const currentPage = Number(searchParams.page) || 1;
  const episodeFilter = searchParams.episode;
  const recommenderFilter = searchParams.recommender;

  const itemsToShow = currentPage * ITEMS_PER_PAGE;

  const [{ items: paginatedComics, total }, filterOptions] = await Promise.all([
    getComics({
      search,
      episode: episodeFilter,
      recommender: recommenderFilter,
      limit: itemsToShow,
      offset: 0,
    }),
    getFilterOptions(),
  ]);

  const hasNextPage = itemsToShow < total;

  return (
    <>
      <Filters episodes={filterOptions.episodes} recommenders={filterOptions.recommenders} />

      <div className="min-h-screen bg-background container py-8">
        <main className="">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {paginatedComics.map((comic: Comic) => (
                <AnimatedCard key={comic.id}>
                  <ComicCard comic={comic} />
                </AnimatedCard>
              ))}
            </AnimatePresence>
          </div>
        </main>
        {total === 0 ? (
          <div className="mt-12 text-center text-muted-foreground">
            No awesome comics found. Try different filters or search terms.
          </div>
        ) : (
          <div className="mt-8">
            <InfiniteScroll hasNextPage={hasNextPage} />
          </div>
        )}
        <BackToTop />
      </div>
    </>
  );
}
