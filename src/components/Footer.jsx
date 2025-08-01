import React from 'react';
import SplineFooterModel from './SplineFooterModel';

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-stone-200 overflow-hidden">
      {/* Spline Model as full interactive background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SplineFooterModel />
      </div>
      
      {/* Footer content overlays Spline */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-lg font-bold text-stone-800">YourReceptionAI</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-16">
            {/* About */}
            <div className="min-w-[120px]">
              <h4 className="font-semibold text-stone-900 mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Our Team</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Product */}
            <div className="min-w-[120px]">
              <h4 className="font-semibold text-stone-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Features</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Pricing</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Request a Demo</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">API Docs</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-[120px]">
              <h4 className="font-semibold text-stone-900 mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Help Center</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="min-w-[120px]">
              <h4 className="font-semibold text-stone-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-stone-600 hover:text-stone-900 text-sm transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="min-w-[150px]">
            <h4 className="font-semibold text-stone-900 mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-stone-100 hover:bg-stone-200 rounded border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-all">
                <span className="text-xs font-medium">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 bg-stone-100 hover:bg-stone-200 rounded border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 transition-all">
                <span className="text-xs font-medium">in</span>
              </a>
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