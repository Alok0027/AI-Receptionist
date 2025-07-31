import { useEffect, useState, useRef } from "react";
import Nextbot from './Nextbot';
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

  const title = "Kairo";
  const tagline =
    "The AI that gives you the edge — experience dynamic intelligence with movement, form, and power.";

  return (
    <section className="relative h-screen w-full bg-neutral-300">
      <Nextbot />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-black pointer-events-none">
        {showTitle && (
          <h1
            ref={titleRef}
            className="hero-title text-5xl md:text-6xl font-medium mb-4 text-white"
            aria-label={title}
          >
            {title}
          </h1>
        )}
        {showTagline && (
          <p
            ref={taglineRef}
            className="hero-tagline text-xl text-white max-w-xl"
            aria-label={tagline}
          >
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;

if (process.env.NODE_ENV === 'development') {
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => () => {};
}