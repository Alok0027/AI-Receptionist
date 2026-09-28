import React, { useState, useEffect, useRef } from 'react';
import { Bell, ChevronDown, UserCircle, DoorOpen, KeyRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AlokK from "../assets/AlokK.jpeg";
import { useAuth } from '../context/AuthContext';

const Topbar = ({ currentPageTitle = 'Dashboard' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { business, logout } = useAuth();
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
    logout();
    setIsDropdownOpen(false);
    navigate('/login');
  };
        return (
        <div className="flex items-center justify-between h-16 bg-stone-50 relative z-30">
            {/* Current Page Title Area - matches sidebar width */}
            <div className="flex items-center justify-start w-[300px] h-full px-6">
                <h1 className="text-xl font-semibold text-stone-900">
                    {currentPageTitle}
                </h1>
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
                            <span className="text-sm text-stone-700">{business?.firstName || 'Account'}</span>
                            <ChevronDown size={16} className={`text-stone-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-stone-200">
                                <Link
                                    to="/forgot-password"
                                    className="flex items-center px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <KeyRound size={16} className="mr-2" />
                                    Forgot Password
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-stone-100"
                                >
                                    <DoorOpen size={16} className="mr-2" />
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