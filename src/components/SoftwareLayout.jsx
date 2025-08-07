import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const SoftwareLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentPageTitle, setCurrentPageTitle] = useState('Dashboard');
  const location = useLocation();

  // Navigation items mapping for page titles
  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/call-management", label: "Call Management" },
    { href: "/appointments", label: "Appointments Scheduling" },
    { href: "/billing", label: "Billing & Subscription" },
    { href: "/integrations", label: "Integrations" },
    { href: "/support-help", label: "Support / Help" },
    { href: "/profile", label: "Profile / Account" },
  ];

  useEffect(() => {
    const currentItem = navItems.find(item => item.href === location.pathname);
    if (currentItem) {
      setCurrentPageTitle(currentItem.label);
    } else {
      setCurrentPageTitle('Dashboard'); // Default fallback
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-stone-50">
      <Sidebar isCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'ml-16' : 'ml-[300px]'}`}>
        <Topbar currentPageTitle={currentPageTitle} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-stone-50 p-6 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SoftwareLayout;