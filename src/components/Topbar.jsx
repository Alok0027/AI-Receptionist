import React, { useState, useEffect, useRef } from 'react';
import { Bell, ChevronDown, UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AlokK from "../assets/AlokK.jpeg";
import kairologo from "../assets/kairologo.png";

const Topbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 10);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handler);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handler);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // TODO: Implement actual logout logic (e.g., clearing tokens, updating context)
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    navigate('/login');
  };
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
                    <div className="relative" ref={dropdownRef}>
                        <button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-2 hover:bg-stone-100 rounded-lg p-2 transition-colors"
                        >
                            <img
                                src={AlokK}
                                alt="User"
                                className="w-8 h-8 rounded-full border border-stone-300"
                            />
                            <span className="text-sm text-stone-700">Alok</span>
                            <ChevronDown size={16} className={`text-stone-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-stone-200">
                                <Link 
                                    to="/forgot-password"
                                    className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    Forgot Password
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className="w-full text-left block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );;
}
export default Topbar;