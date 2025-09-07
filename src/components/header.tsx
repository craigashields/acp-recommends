import React from "react";
import Link from "next/link";
import siteMetadata from "@/data/site-data";
import AcpSVG from "@/components/icons/acp";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link
          href="/"
          aria-label={siteMetadata.headerTitle}
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <AcpSVG />
            </div>
            {typeof siteMetadata.headerTitle === "string" ? (
              <div className="text-primary-900 hidden h-header text-4xl font-semibold sm:block font-heading">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
