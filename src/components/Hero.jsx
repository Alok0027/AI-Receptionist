import { useEffect, useState, useRef, lazy, Suspense } from "react";

const Nextbot = lazy(() => import('./Nextbot'));
import gsap from "gsap";

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 2000);
    const taglineTimer = setTimeout(() => setShowTagline(true), 3500);
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(taglineTimer);
    };
  }, []);

  useEffect(() => {
    if (showTitle && titleRef.current) {
      document.fonts.ready.then(() => {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "sine.out" }
        );
      });
    }
  }, [showTitle]);

  useEffect(() => {
    if (showTagline && taglineRef.current) {
      document.fonts.ready.then(() => {
        gsap.fromTo(
          taglineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2, ease: "sine.out" }
        );
      });
    }
  }, [showTagline]);

  const title = "Meet Your Smartest Receptionist Yet";
  const tagline =
    "The AI that gives you the edge — experience dynamic intelligence with movement, form, and power.";

  return (
    <section className="relative h-screen w-full bg-neutral-300">
      <div className="absolute inset-0 flex">
        {/* Text Content - Left Side */}
        <div className="w-1/2 z-10 flex flex-col justify-center items-start text-left text-black px-8 lg:px-16">
          {showTitle && (
            <h1
              ref={titleRef}
              className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-4 text-black"
              aria-label={title}
            >
              {title}
            </h1>
          )}
          {showTagline && (
            <p
              ref={taglineRef}
              className="hero-tagline text-lg sm:text-xl lg:text-2xl text-black max-w-2xl font-medium"
              aria-label={tagline}
            >
              {tagline}
            </p>
          )}
        </div>
        
        {/* 3D Model - Right Side */}
        <div className="w-1/2 h-full relative">
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