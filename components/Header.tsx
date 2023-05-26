import React from 'react';
import Link from 'next/link';
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import headerNavLinks from '@/data/headerNavLinks'
import MobileNav from './MobileNav'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-10">
        <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
        <a rel="noopener noreferrer">
            <div className="flex items-center justify-between">
            <div className="mr-3">
                <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
                </div>
            ) : (
                siteMetadata.headerTitle
            )}
            </div>
            </a>
        </Link>
        </div>
        <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
            {headerNavLinks.map((link) => (
            <Link 
                key={link.title}
                href={link.href}
            >
                {link.title}
            </Link>
            ))}
        </div>
        <MobileNav />
        </div>
    </header>    
  );
};

export default Header;