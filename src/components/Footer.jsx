import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
                <li><Link to="/about-us" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">About Us</Link></li>
                <li><a href="/#team" onClick={(e) => { e.preventDefault(); handleScrollToSection('team'); }} className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Our Team</a></li>
                <li><Link to="/careers" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Careers</Link></li>
              </ul>
            </div>

            {/* Product */}
            <div className="min-w-[120px]">
              <h4 className="font-normal text-stone-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="/#features" onClick={(e) => { e.preventDefault(); handleScrollToSection('features'); }} className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Features</a></li>
                <li><a href="/#pricing" onClick={(e) => { e.preventDefault(); handleScrollToSection('pricing'); }} className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Pricing</a></li>
                <li><Link to="/request-demo" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Request a Demo</Link></li>
                <li><Link to="/api-docs" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">API Docs</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-[120px]">
              <h4 className="font-normal text-stone-900 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/help-center" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Help Center</Link></li>
                <li><Link to="/blog" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Blog</Link></li>
                <li><Link to="/contact" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Contact Us</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="min-w-[120px]">
              <h4 className="font-normal text-stone-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Terms of Service</Link></li>
                <li><Link to="/cookie-policy" className="relative pb-1 text-stone-600 hover:text-stone-900 text-sm transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-stone-500 text-sm">
              © 2025 KairoAI. All rights reserved.
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