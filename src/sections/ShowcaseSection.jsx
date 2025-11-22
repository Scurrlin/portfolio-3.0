import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const signalRef = useRef(null);
  const lannerRef = useRef(null);
  const costRef = useRef(null);
  const artRef = useRef(null);
  const appleRef = useRef(null);
  const stencilRef = useRef(null);
  const transitionOverlayRef = useRef(null);
  const appleImageRef = useRef(null);
  
  const [isTransitioning, setIsTransitioning] = useState(false);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [signalRef.current, lannerRef.current, costRef.current, stencilRef.current, appleRef.current, artRef.current];

    // First group animations
    const firstGroupCards = [signalRef.current, lannerRef.current, costRef.current];
    firstGroupCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    // Second group animations (trigger earlier)
    const secondGroupCards = [artRef.current, appleRef.current, stencilRef.current];
    secondGroupCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=200",
          },
        }
      );
    });
  }, []);

  const handleAppleClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);

    // Get the position of the apple image
    const appleRect = appleImageRef.current.getBoundingClientRect();
    const centerX = appleRect.left + appleRect.width / 2;
    const centerY = appleRect.top + appleRect.height / 2;

    // Calculate the max distance to cover the entire screen
    const maxDistance = Math.sqrt(
      Math.pow(Math.max(centerX, window.innerWidth - centerX), 2) +
      Math.pow(Math.max(centerY, window.innerHeight - centerY), 2)
    );

    // Position the overlay at the center of the apple image
    gsap.set(transitionOverlayRef.current, {
      left: centerX,
      top: centerY,
      xPercent: -50,
      yPercent: -50,
    });

    // Animate the expansion
    gsap.to(transitionOverlayRef.current, {
      width: maxDistance * 2,
      height: maxDistance * 2,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        // Navigate to the URL after animation completes
        window.location.href = "https://iphonereplica.seancurrlin.com/";
      },
    });
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
      <div className="mb-20"> 
      <TitleHeader
          title="Portfolio Samples"
          sub="A Selection of Key Projects"
        />
        </div>
        <div className="showcaselayout">
          <div ref={signalRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/signalist.png" alt="Signalist" className="border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-lg" />
            </div>
            <div className="text-content">
              <a href="https://stocks-app-s2l1.onrender.com" target="_blank" rel="noopener noreferrer">
                <h2 className="flex items-center gap-2">
                  Signalist
                  <img src="/images/arrow.svg" alt="arrow" className="h-5 w-5" />
                </h2>
              </a>
              <p className="text-white-50 md:text-xl">
                A full MERN stack stock market analysis app that lets users create custom watchlists 
              </p>
              
              {/* Tech icons for Signalist */}
              <div className="flex items-center gap-6 mt-4">
                <div className="tech-stack flex gap-4">
                  <img src="/images/next.svg" alt="NextJS" className="h-8 w-8" />
                  <img src="/images/tail.svg" alt="TailwindCSS" className="h-8 w-8" />
                  <img src="/images/ts.svg" alt="TypeScript" className="h-8 w-8" />
                  <img src="/images/dock.svg" alt="Docker" className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project" ref={lannerRef}>
              <div className="image-wrapper bg-[#ffffff]">
                <img
                  src="/images/lanner.svg"
                  alt="Lanner"
                />
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://lannernoodles.com/" target="_blank" rel="noopener noreferrer">
                  <h2 className="flex items-center gap-2">
                    Lanner Noodles: Custom Design
                    <img src="/images/arrow.svg" alt="arrow" className="h-4 w-4" />
                  </h2>
                </a>
                
                {/* Tech icons for Lanner Noodles */}
                <div className="flex items-center gap-4">
                  <div className="tech-stack flex gap-3">
                    <img src="/images/next.svg" alt="NextJS" className="h-6 w-6" />
                    <img src="/images/tail.svg" alt="TailwindCSS" className="h-6 w-6" />
                    <img src="/images/ts.svg" alt="TypeScript" className="h-6 w-6" />
                    <img src="/images/fm.svg" alt="Framer Motion" className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="project" ref={costRef}>
              <div className="image-wrapper" style={{background: 'linear-gradient(135deg, #4aa3f0, #3f82d0, #2563eb, #1e40af)'}}>
                <img src="/images/tableau.png" alt="The Cost of Virtuosity" />
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://scurrlin.github.io/cost_of_virtuosity/" target="_blank" rel="noopener noreferrer">
                  <h2 className="flex items-center gap-2">
                    The Cost of Virtuosity: Data Analysis
                    <img src="/images/arrow.svg" alt="arrow" className="h-4 w-4" />
                  </h2>
                </a>
                
                {/* Shield counter for CoV */}
                <div className="flex items-center gap-4">
                  <div className="shield-counter">
                    <img
                      src="https://img.shields.io/badge/total_views-4.1k-blue"
                      alt="Tableau Views"
                      className="h-5 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          {/* Second group of projects */}
          <div className="showcaselayout" style={{marginTop: '60px'}}>
          <div ref={artRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/p1.png" alt="Artofficial" className="border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-lg" />
            </div>
            <div className="text-content">
              <a href="https://www.artofficial.fun/" target="_blank" rel="noopener noreferrer">
                <h2 className="flex items-center gap-2">
                  Artofficial
                  <img src="/images/arrow.svg" alt="arrow" className="h-5 w-5" />
                </h2>
              </a>
              <p className="text-white-50 md:text-xl">
                A full MERN stack AI image generator powered by Cloudinary, DALL-E-3, and Hostinger
              </p>
              
              {/* Tech icons for Artofficial */}
              <div className="flex items-center gap-6 mt-4">
                <div className="tech-stack flex gap-4">
                  <img src="/images/re.svg" alt="React" className="h-8 w-8" />
                  <img src="/images/tail.svg" alt="TailwindCSS" className="h-8 w-8" />
                  <img src="/images/cloud.svg" alt="Cloudinary" className="h-8 w-8" />
                  <img src="/images/host.svg" alt="Hostinger" className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper">
            <div className="project" ref={stencilRef}>
              <div className="image-wrapper" style={{background: 'linear-gradient(135deg, #e83f80, #f14660, #ec5d2d, #fa7454, #f9a144)'}}>
                <img src="/images/npm.png" alt="Stencil" />
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://www.npmjs.com/package/@scurrlin/stencil" target="_blank" rel="noopener noreferrer">
                  <h2 className="flex items-center gap-2">
                    Stencil: NPM Package
                    <img src="/images/arrow.svg" alt="arrow" className="h-4 w-4" />
                  </h2>
                </a>
                
                {/* Shield counter for Stencil */}
                <div className="flex items-center gap-4">
                  <div className="shield-counter">
                    <img
                      src="https://img.shields.io/badge/downloads-28k-blue"
                      alt="downloads"
                      className="h-5 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="project" ref={appleRef}>
              <div className="image-wrapper">
                <img
                  ref={appleImageRef}
                  src="/images/white_apple_logo.png"
                  alt="Secret"
                  style={{objectFit: 'cover', padding: 0}}
                />
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://iphonereplica.seancurrlin.com/" onClick={handleAppleClick} style={{ cursor: isTransitioning ? 'default' : 'pointer' }}>
                  <h2 className="flex items-center gap-2">
                    Secret Portfolio: ???
                    <img src="/images/arrow.svg" alt="arrow" className="h-4 w-4" />
                  </h2>
                </a>
                
                {/* Tech icons for Secret Portfolio */}
                <div className="flex items-center gap-4">
                  <div className="tech-stack flex gap-3">
                    <img src="/images/re.svg" alt="React" className="h-6 w-6" />
                    <img src="/images/tail.svg" alt="TailwindCSS" className="h-6 w-6" />
                    <img src="/images/three.svg" alt="ThreeJS" className="h-6 w-6" />
                    <img src="/images/gsap.svg" alt="GSAP" className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Transition Overlay */}
      <div
        ref={transitionOverlayRef}
        className="transition-overlay"
        style={{
          position: 'fixed',
          width: 0,
          height: 0,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          zIndex: 9999,
          pointerEvents: isTransitioning ? 'all' : 'none',
        }}
      />
    </div>
  );
};

export default AppShowcase;