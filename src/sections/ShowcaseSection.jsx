import { useRef } from "react";
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

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [signalRef.current, lannerRef.current, costRef.current, stencilRef.current, appleRef.current, artRef.current];

    cards.forEach((card, index) => {
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
  }, []);

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
              <img src="/images/signalist.png" alt="Signalist" />
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
                  <img src="/images/host.svg" alt="Hostinger" className="h-8 w-8" />
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
                
                {/* Tech icons for Project 2 */}
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
                
                {/* Shield counter */}
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

          {/* Second group of projects */}
          <div ref={artRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/p1.png" alt="Artofficial" />
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
            <div className="project" ref={appleRef}>
              <div className="image-wrapper bg-[#ffffff]">
                <img
                  src="/images/apple.png"
                  alt="iPhone 15"
                />
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://iphone-15-z944.onrender.com" target="_blank" rel="noopener noreferrer">
                  <h2 className="flex items-center gap-2">
                    iPhone 15 Replica: Modern UI/UX
                    <img src="/images/arrow.svg" alt="arrow" className="h-4 w-4" />
                  </h2>
                </a>
                
                {/* Tech icons for Project 5 */}
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
                
                {/* Tech icons or badge for Project 6 */}
                <div className="flex items-center gap-4">
                  <div className="shield-counter">
                    <img
                      src="https://img.shields.io/npm/dt/%40scurrlin%2Fstencil?style=flat&color=blue"
                      alt="downloads"
                      className="h-5 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;