import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

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
          sub="A selection of key projects"
        />
        </div>
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Artofficial" />
            </div>
            <div className="text-content">
              <h2>Artofficial: AI Image Generator</h2>
              <p className="text-white-50 md:text-xl">
                A full MERN stack AI image generator powered by Cloudinary, DALL-E-3, and Hostinger
              </p>
              
              {/* Technology icons for Project 1 */}
              <div className="tech-stack flex gap-4 mt-4">
                <img src="/images/re.svg" alt="React" className="h-8 w-8" />
                <img src="/images/tail.svg" alt="TailwindCSS" className="h-8 w-8" />
                <img src="/images/cloud.svg" alt="Cloudinary" className="h-8 w-8" />
                <img src="/images/host.svg" alt="Hostinger" className="h-8 w-8" />
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Zentry"
                />
              </div>
              <h2>Zentry Replica: Modern UI/UX</h2>
              
              {/* Technology icons for Project 2 */}
              <div className="tech-stack flex gap-3 mt-3">
                <img src="/images/re.svg" alt="React" className="h-6 w-6" />
                <img src="/images/tail.svg" alt="TailwindCSS" className="h-6 w-6" />
                <img src="/images/gsap.svg" alt="GSAP" className="h-6 w-6" />
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Stencil" />
              </div>
              <h2>Stencil: NPM Package</h2>
              
              {/* Shield Counter for Project 3 */}
              <div className="shield-counter mt-3">
                <a
                  href="https://www.npmjs.com/package/@scurrlin/stencil"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ height: '20px' }}
                    src="https://img.shields.io/npm/dt/%40scurrlin%2Fstencil?style=flat&color=blue"
                    alt="NPM Downloads"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;