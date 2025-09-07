"use client";

import { ComicCard } from "@/components/comic-card";
import { Filters } from "@/components/filters";
import { Comic } from "@/types/database";
import { Search } from "@/components/search";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { BackToTop } from "@/components/back-to-top";
import { AnimatePresence } from "framer-motion";
import { AnimatedCard } from "@/components/animation-card";
import { useEffect, useState } from "react";
import { SearchParams } from "@/types/general";

const ITEMS_PER_PAGE = 12;

export default function HomePage({
  comics,
  searchParams,
}: {
  comics: Comic[];
  searchParams: SearchParams;
}) {
  const [displayedComics, setDisplayedComics] = useState<Comic[]>([]); // Comics to display
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const search = searchParams.search?.toLowerCase();
  const episodeFilter = searchParams.episode;
  const recommenderFilter = searchParams.recommender;

  // Build filter options from provided comics
  const episodes = Array.from(new Set(comics.map((c) => c.episode))).sort(
    (a, b) => b - a
  );
  const recommenders = Array.from(
    new Set(comics.map((c) => c.recommended_by))
  );

  let filteredComics = comics;

  if (search) {
    filteredComics = filteredComics.filter(
      (comic: Comic) =>
        comic.title.toLowerCase().includes(search) ||
        comic.recommended_by.toLowerCase().includes(search)
    );
  }

  if (episodeFilter) {
    filteredComics = filteredComics.filter(
      (comic: Comic) => comic.episode.toString() === episodeFilter
    );
  }

  if (recommenderFilter) {
    filteredComics = filteredComics.filter(
      (comic: Comic) =>
        comic.recommended_by.toLowerCase() === recommenderFilter.toLowerCase()
    );
  }

  // Paginate comics on the client
  useEffect(() => {
    const start = 0;
    const end = page * ITEMS_PER_PAGE;

    const newComics = filteredComics.slice(start, end);
    setDisplayedComics(newComics);

    // Check if there are more pages
    if (newComics.length >= filteredComics.length) {
      setHasNextPage(false);
    } else {
      setHasNextPage(true);
    }
  }, [hasNextPage, filteredComics]);

  const handleLoadMore = () => {
    if (hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Filters episodes={episodes} recommenders={recommenders} />

      <div className="min-h-screen bg-background container py-8">
        <main className="">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence>
              {displayedComics.map((comic: Comic) => (
                <AnimatedCard key={comic.id}>
                  <ComicCard comic={comic} />
                </AnimatedCard>
              ))}
            </AnimatePresence>
          </div>
        </main>
        {filteredComics.length === 0 ? (
          <div className="mt-12 text-center text-muted-foreground">
            No awesome comics found. Try different filters or search terms.
          </div>
        ) : (
          <div className="mt-8">
            {/* <InfiniteScroll
              hasNextPage={hasNextPage}
              onLoadMore={handleLoadMore}
            /> */}
          </div>
        )}
        <BackToTop />
      </div>
    </>
  );
}
