import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrCreateWishlist, getMyWishlistComicIds } from "@/actions/wishlist";
import { getComics, getFilterOptions } from "@/actions/getComics";
import { WishlistPage } from "@/components/wishlist-page";

const WISHLIST_LIMIT = 200;

export default async function MyWishlistPage({
  searchParams,
}: {
  searchParams: {
    search?: string;
    episode?: string;
    recommender?: string;
  };
}) {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const user = await currentUser();
  const ownerName = user?.firstName
    ? `${user.firstName}${user.lastName ? ` ${user.lastName}` : ""}`
    : (user?.username ?? "You");

  const [wishlist, allComicIds, filterOptions] = await Promise.all([
    getOrCreateWishlist(),
    getMyWishlistComicIds(),
    getFilterOptions(),
  ]);

  const { items: comics } = await getComics({
    comicIds: allComicIds,
    search: searchParams.search,
    episode: searchParams.episode,
    recommender: searchParams.recommender,
    limit: WISHLIST_LIMIT,
    offset: 0,
  });

  return (
    <WishlistPage
      comics={comics}
      ownerName={ownerName}
      isOwner={true}
      shareSlug={wishlist.share_slug}
      wishlistComicIds={allComicIds}
      episodes={filterOptions.episodes}
      recommenders={filterOptions.recommenders}
    />
  );
}
