import React from 'react';
import { Footer, Navbar, Sidebar } from '../components';
import Email from '../components/Email';
import Socials from '../components/Socials';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white relative">
      <Navbar />
      <Sidebar />
      <Socials />
      <Email />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
