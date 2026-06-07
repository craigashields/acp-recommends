import React from "react";
import Facebook from "./facebook.svg";
import Spotify from "./spotify.svg";
import Applepodcast from "./applepodcasts.svg";
import Podbean from "./podbean.svg";

// Icons taken from: https://simpleicons.org/

const components = {
  facebook: Facebook,
  spotify: Spotify,
  applepodcast: Applepodcast,
  podbean: Podbean,
};

interface SocialIconProps {
  kind: keyof typeof components;
  href?: string;
  size?: number; // pixels
}

const SocialIcon: React.FC<SocialIconProps> = ({ kind, href, size = 24 }) => {
  const Icon = components[kind];
  const iconEl = (
    <Icon
      className="fill-current text-primary-700 hover:text-red-500 inline-block"
      width={size}
      height={size}
      aria-hidden
    />
  );

  if (!href) return <span>{iconEl}</span>;

  return (
    <a
      className="text-sm"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      aria-label={kind}
    >
      <span className="sr-only">{kind}</span>
      {iconEl}
    </a>
  );
};

export default SocialIcon;
