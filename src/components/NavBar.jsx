import { useState, useEffect, useRef } from "react";
import clsx from "clsx";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Ref for audio element
  const audioElementRef = useRef(null);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <div className="logo-section">
          <a href="#hero" className="logo">
            Sean Currlin
          </a>
          
          <button
            onClick={toggleAudioIndicator}
            className="audio-btn"
          >
            <audio
              ref={audioElementRef}
              className="hidden"
              src="/audio/voyage.mp3"
              loop
            />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={clsx("indicator-line", {
                  active: isIndicatorActive,
                })}
                style={{
                  "--animation-order": bar,
                  animationDelay: `${bar * 0.1}s`,
                }}
              />
            ))}
          </button>
        </div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a 
          href="https://drive.google.com/file/d/1LQlziQnVyZPlviWLgQT9IfJ5niInALv_/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-btn group"
        >  
          <div className="inner">
            <span>Resume</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;