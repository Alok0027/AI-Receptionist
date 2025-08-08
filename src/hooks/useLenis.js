import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Check if we're on a software/dashboard page
    const isSoftwarePage = () => {
      const path = window.location.pathname;
      return path.startsWith('/dashboard') || 
             path.startsWith('/call-management') || 
             path.startsWith('/appointments') || 
             path.startsWith('/knowledge') || 
             path.startsWith('/billing') || 
             path.startsWith('/integrations') || 
             path.startsWith('/support-help') || 
             path.startsWith('/profile');
    };

    // If we're on a software page, don't initialize Lenis
    if (isSoftwarePage()) {
      return () => {};
    }
    // Add global smooth transitions CSS
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                   opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                   background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                   border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                   color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                   box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      body {
        overflow-x: hidden;
      }
      
      /* Smooth hover effects */
      button, a, [role="button"] {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Smooth image loading */
      img {
        transition: opacity 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);

    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: true,
      touchMultiplier: 1.8,
      infinite: false,
      wrapper: window,
      content: document.documentElement,
      wheelMultiplier: 1.2,
      normalizeWheel: true
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href'));
        if (element) {
          lenis.scrollTo(element, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      document.head.removeChild(style);
      delete window.lenis;
    };
  }, []);
};

export const scrollToElement = (target, offset = 0) => {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  if (element) {
    const lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(element, { offset, duration: 1.2 });
    } else {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export const scrollToTop = () => {
  const lenis = window.lenis;
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
