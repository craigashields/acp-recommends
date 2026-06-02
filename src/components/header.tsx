import React from "react";
import Link from "next/link";
import siteMetadata from "@/data/site-data";
import AcpSVG from "@/components/icons/acp";
import SocialLinks from "@/components/social-links";
import { HeaderAuth } from "@/components/header-auth";

const Header: React.FC = () => {
  return (
    <header className="relative py-10">
      {/* Auth: absolute top-right so it never affects the branding layout */}
      <div className="absolute top-10 right-0">
        <HeaderAuth />
      </div>

      {/* Branding: centred on mobile, left-aligned on desktop, unaffected by auth */}
      <div className="pr-14 sm:pr-16">
        <div className="grid grid-cols-1 gap-y-2 sm:gap-y-1 sm:grid-cols-[auto_1fr] sm:grid-rows-[auto_auto] sm:gap-x-4 sm:items-center">
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className="justify-self-center sm:justify-self-start sm:col-start-1 sm:row-span-2"
          >
            <AcpSVG />
          </Link>

          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="text-center sm:text-left text-lg sm:text-2xl md:text-3xl leading-tight break-words font-semibold font-heading">
              {siteMetadata.headerTitle}
            </div>
          </Link>

          {/* Social icons: visible on mobile (centred), left-aligned on desktop */}
          <div className="justify-self-center sm:justify-self-start sm:col-start-2 sm:row-start-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
