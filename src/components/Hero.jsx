import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Nextbot = lazy(() => import('./Nextbot'));

const Hero = () => {
  // Animation variants for different elements
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const taglineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      x: -20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        delay: 1.2
      }
    }
  };

  const buttonsVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.8
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const title = "From Static to Smart — Welcome to the Future.";
  const tagline =
    "Say goodbye to blank screens and hello to dynamic conversations. Your AI receptionist is alert, adaptive, and always evolving.";

  return (
    <section className="relative h-screen w-full bg-[#E3E3E3]">
      <div className="absolute inset-0 flex">
        {/* Text Content - Responsive Layout */}
        <motion.div 
          className="w-full md:w-1/2 z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left text-black px-4 md:pl-8 lg:pl-16 md:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={titleVariants}
            className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-6 text-black max-w-4xl"
            aria-label={title}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={taglineVariants}
            className="hero-tagline text-lg sm:text-xl md:text-xl lg:text-2xl text-black max-w-2xl font-light mt-2"
            aria-label={tagline}
          >
            {tagline}
          </motion.p>

          <motion.div 
            variants={buttonsVariants}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-10"
          >
            <Link to="/register">
              <motion.button 
                className="hero-button px-8 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Now
              </motion.button>
            </Link>
            <Link to="/blog">
              <motion.button 
                className="group text-black py-3 px-5 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="loading-underline">
                  Learn More
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        
        {/* 3D Model - Hidden on Mobile */}
        <div className="hidden md:block w-1/2 h-full relative">
          <Suspense fallback={null}>
            <Nextbot />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;

if (process.env.NODE_ENV === 'development') {
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => () => {};
}