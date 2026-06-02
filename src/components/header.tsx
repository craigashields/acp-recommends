import React from "react";
import Link from "next/link";
import siteMetadata from "@/data/site-data";
import AcpSVG from "@/components/icons/acp";
import SocialLinks from "@/components/social-links";
import { HeaderAuth } from "@/components/header-auth";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div className="flex-1">
        <div className="grid grid-cols-1 gap-y-2 sm:gap-y-1 sm:grid-cols-[auto_1fr] sm:grid-rows-[auto_auto] sm:gap-x-4 sm:items-center">
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            rel="noopener noreferrer"
            className="justify-self-center sm:justify-self-start sm:col-start-1 sm:row-span-2"
          >
            <AcpSVG />
          </Link>

          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            rel="noopener noreferrer"
          >
            <div className="text-primary-900 text-center sm:text-left text-lg sm:text-2xl md:text-3xl leading-tight break-words font-semibold font-heading">
              {siteMetadata.headerTitle}
            </div>
          </Link>

          <div className="justify-self-center sm:justify-self-start sm:col-start-2 sm:row-start-2">
            <SocialLinks />
          </div>
        </div>
      </div>
      <HeaderAuth />
    </header>
  );
};

export default Header;
