import React from "react";
import Link from "next/link";
import siteMetadata from "@/data/site-data";
import AcpSVG from "@/components/icons/acp";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div className="w-full">
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-center">
            <div className="sm:mr-3">
              <AcpSVG />
            </div>
            <div className="text-primary-900 mt-2 text-center h-header text-lg sm:text-2xl md:text-3xl  leading-tight break-words px-4 font-semibold font-heading">
              {siteMetadata.headerTitle}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
