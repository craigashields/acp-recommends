"use client";

import { cn } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryImageProps {
  id: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function CloudinaryImage({
  id,
  alt,
  width,
  height,
  className,
}: CloudinaryImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <CldImage
      src={id}
      width={width}
      height={height}
      alt={alt}
      className={cn(
        `${className} duration-700 ease-in-out group-hover:opacity-75 group-hover:scale-110`,
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoad={() => setLoading(false)}
    />
  );
}
