import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SectionContainer from './SectionContainer'

interface LayoutProps {
    children: ReactNode;
  }

  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
      </SectionContainer>
    );
  };
  
  export default Layout;  
