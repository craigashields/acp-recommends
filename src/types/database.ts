export interface Comic {
  id: number;
  title: string;
  episode: number;
  recommended_by: string;
  creatorUrl: string;
  cloudinary_image_id: string;
}

export interface Wishlist {
  id: string;
  user_id: string;
  share_slug: string;
  created_at: string;
}

export interface WishlistItem {
  id: number;
  wishlist_id: string;
  comic_id: number;
  created_at: string;
}
