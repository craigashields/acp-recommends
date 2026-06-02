import React from "react";
import Link from "next/link";
import siteMetadata from "@/data/site-data";
import AcpSVG from "@/components/icons/acp";
import SocialLinks from "@/components/social-links";
import { HeaderAuth } from "@/components/header-auth";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-6">
      {/* Left: Logo + Title */}
      <Link
        href="/"
        aria-label={siteMetadata.headerTitle}
        className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 min-w-0"
      >
        <AcpSVG />
        <span className="text-lg sm:text-2xl md:text-3xl font-semibold font-heading leading-tight">
          {siteMetadata.headerTitle}
        </span>
      </Link>

      {/* Right: Social icons (desktop only) + Auth */}
      <div className="flex items-center gap-3 shrink-0 ml-4">
        <div className="hidden sm:flex items-center">
          <SocialLinks />
        </div>
        <HeaderAuth />
      </div>
    </header>
  );
};

export default Header;
