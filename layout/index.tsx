import React from 'react';
import { Footer, Navbar, Sidebar } from '../components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Sidebar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
