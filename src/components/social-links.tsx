import React from "react";
import SocialIcon from "./social-icons";
import siteMetadata from "@/data/site-data";
export default function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-4">
      <SocialIcon kind="facebook" href={siteMetadata.facebook} size={24} />
      <SocialIcon kind="spotify" href={siteMetadata.spotify} size={24} />
      <SocialIcon
        kind="applepodcast"
        href={siteMetadata.applepodcast}
        size={24}
      />
      <SocialIcon kind="podbean" href={siteMetadata.podbean} size={24} />
    </nav>
  );
}
