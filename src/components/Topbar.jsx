import React, { useState, useEffect } from 'react';
import { Bell, ChevronDown } from 'lucide-react';
import AlokK from "../assets/AlokK.jpeg";
import kairologo from "../assets/kairologo.png";

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
        return (
        <div className="flex items-center justify-between h-16 bg-stone-50 relative z-30">
            {/* Brand Logo Area - matches sidebar width */}
            <div className="flex items-center justify-center w-[300px] h-full">
                <img 
                    src={kairologo} 
                    alt="Kairo AI" 
                    className="h-8 w-auto object-contain -ml-40"
                />
            </div>

            {/* Main Topbar Content */}
            <div className="flex items-center justify-end flex-1 px-6">
                {/* User Menu */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-stone-100">
                        <Bell size={20} className="text-stone-600" />
                    </button>
                    <div className="flex items-center space-x-2">
                        <img
                            src={AlokK}
                            alt="User"
                            className="w-8 h-8 rounded-full border border-stone-300"
                        />
                        <span className="text-sm text-stone-700">Alok</span>
                        <ChevronDown size={16} className="text-stone-500" />
                    </div>
                </div>
            </div>
        </div>
    );;
}
export default Topbar;