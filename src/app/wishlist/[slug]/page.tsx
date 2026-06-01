import { notFound } from "next/navigation";
import { getWishlistBySlug } from "@/actions/wishlist";
import { getComics, getFilterOptions } from "@/actions/getComics";
import { WishlistPage } from "@/components/wishlist-page";

const WISHLIST_LIMIT = 200;

export default async function SharedWishlistPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {
    search?: string;
    episode?: string;
    recommender?: string;
  };
}) {
  const result = await getWishlistBySlug(params.slug);

  if (!result) notFound();

  const { wishlistComicIds, ownerName } = result;

  const [{ items: comics }, filterOptions] = await Promise.all([
    getComics({
      comicIds: wishlistComicIds,
      search: searchParams.search,
      episode: searchParams.episode,
      recommender: searchParams.recommender,
      limit: WISHLIST_LIMIT,
      offset: 0,
    }),
    getFilterOptions(),
  ]);

  return (
    <WishlistPage
      comics={comics}
      ownerName={ownerName}
      isOwner={false}
      episodes={filterOptions.episodes}
      recommenders={filterOptions.recommenders}
    />
  );
}
