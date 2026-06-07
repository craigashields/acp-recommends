import Link from "next/link";
import { Calendar } from "lucide-react";
import type { Comic } from "@/types/database";
import { CloudinaryImage } from "./cloudinary-image";
import { WishlistButton } from "./wishlist-button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ComicCardProps {
  comic: Comic;
  wishlistState?: { isWishlisted: boolean };
}

export function ComicCard({ comic, wishlistState }: ComicCardProps) {
  return (
    <Card className="overflow-hidden group">
      <Link href={comic.creatorUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-[2/3] overflow-hidden">
          <CloudinaryImage
            id={comic.cloudinary_image_id}
            alt={comic.title}
            width={300}
            height={400}
            className="object-cover w-full h-full"
          />
          {wishlistState !== undefined && (
            <WishlistButton
              comicId={comic.id}
              isWishlisted={wishlistState.isWishlisted}
            />
          )}
        </div>
        <CardContent className="p-4">
          <h2 className="font-semibold line-clamp-1">{comic.title}</h2>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Episode {comic.episode}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              Recommended by {comic.recommended_by}
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
