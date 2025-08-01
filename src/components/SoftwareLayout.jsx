import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';

const SoftwareLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-stone-50">
      <Sidebar isCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'ml-16' : 'ml-[300px]'}`}>
        <Topbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-stone-50 p-6 space-y-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SoftwareLayout;