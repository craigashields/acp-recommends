'use client'

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionContainer from './SectionContainer'
import { getTheme } from '@/lib/theme';
import Snowfall from 'react-snowfall';

let theme = getTheme()

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
 
    <SectionContainer>
      {theme === 'winter' ? (
        <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
        />
      ) : ""}
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
      </SectionContainer>
    );
  };
  
  export default Layout;  
