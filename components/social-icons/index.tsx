import React from 'react';
import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Spotify from './spotify.svg'
import Applepodcast from './applepodcasts.svg'
import Podbean from './podbean.svg'

// Icons taken from: https://simpleicons.org/

const components = {
    mail: Mail,
    github: Github,
    facebook: Facebook,
    spotify: Spotify,
    applepodcast: Applepodcast,
    podbean: Podbean
}

interface SocialIconProps {
    kind: keyof typeof components;
    href?: string;
    size?: number;
  }

  const SocialIcon: React.FC<SocialIconProps> = ({ kind, href, size = 8 }) => {

    // if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    //   return null;

    const SocialSvg = components[kind];

    return (
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`fill-current text-gray-700 hover:text-blue-500 h-${size} w-${size}`}
        />
      </a>
    );
  };
  
  export default SocialIcon;