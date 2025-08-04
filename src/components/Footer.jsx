import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SplineFooterModel from './SplineFooterModel';
import kairologo from '../assets/kairologo.png';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${sectionId}`);
    }
  };
  return (
    <footer className="relative bg-white border-t border-stone-200 overflow-hidden">
      {/* Spline Model as full interactive background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SplineFooterModel />
      </div>
      
      {/* Footer content overlays Spline */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
          {/* Logo Area - Now on the left */}
          <div className="flex flex-col space-y-4 order-1">
            <div className="flex items-center space-x-3">
              <img 
                src={kairologo} 
                alt='brandlogo' 
                className='w-32 h-auto object-contain'
              />
            </div>
            {/* Newsletter Subscribe Section */}
            <div className="mt-6">
              <h4 className="font-normal text-stone-900 mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <button className="px-6 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-16 order-2">
            {/* About */}
            <div className="min-w-[120px]">
              <h4 className="font-normal text-stone-900 mb-4">About</h4>
              <ul className="space-y-2">
                <li><Link to="/about-us" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">About Us</Link></li>
                <li><a href="/#team" onClick={(e) => { e.preventDefault(); handleScrollToSection('team'); }} className="text-stone-600 hover:text-stone-900 text-sm transition-colors cursor-pointer">Our Team</a></li>
                <li><Link to="/careers" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Product */}
            <div className="min-w-[120px]">
              <h4 className="font-normal text-stone-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="/#features" onClick={(e) => { e.preventDefault(); handleScrollToSection('features'); }} className="text-stone-600 hover:text-stone-900 text-sm transition-colors cursor-pointer">Features</a></li>
                <li><a href="/#pricing" onClick={(e) => { e.preventDefault(); handleScrollToSection('pricing'); }} className="text-stone-600 hover:text-stone-900 text-sm transition-colors cursor-pointer">Pricing</a></li>
                <li><Link to="/request-demo" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Request a Demo</Link></li>
                <li><Link to="/api-docs" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">API Docs</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-[120px]">
              <h4 className="font-normal text-stone-900 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help-center" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Help Center</Link></li>
                <li><Link to="/blog" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="min-w-[120px]">
              <h4 className="font-normal text-stone-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-stone-500 text-sm">
              © 2025 YourReceptionAI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-stone-500">
              <span>Made with care for better customer service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;