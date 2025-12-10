import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import dhanyaPhoto from "../assets/images/Dhanya.jpeg";
import landingBg from "../assets/images/developer-portfolio.png";
import ParticlesBackground from "../components/ParticlesBackground";
import Popup from "../components/Popup";
import music from "../assets/music/audio.mp3";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleMusic = () => {
    setPlay(!play);
    if (!play) audioRef.current.play();
    else audioRef.current.pause();
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${landingBg})` }}
    >
      <ParticlesBackground />

      {/* Top-left ND logo + play/pause */}
      <div className="absolute top-4 left-10 flex items-center gap-4 z-30">
      <div
        className="text-5xl font-bold text-white cursor-pointer"
        style={{ fontFamily: '"Brush Script MT", cursive' }}
        onClick={() => window.location.reload()} // <-- Reload page on click
        >
        ND
        </div>
        <button
          onClick={handleMusic}
          className="text-white text-4xl flex items-center justify-center"
        >
          {play ? "⏸️" : "▶️"}
        </button>
      </div>

      {/* Top-right Say Hi button */}
      <div className="absolute top-4 right-4 z-30">
        <button
          onClick={() => setShowContact(true)}
          className="text-white px-10"
        >
          Say Hi..
        </button>
      </div>

      {/* Hero Content */}
      {showContent && (
        <div className="relative z-10 px-4 md:px30 flex flex-col md:flex-row items-center justify-center min-h-screen">
          {/* Photo */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src={dhanyaPhoto}
              alt="Dhanya"
              className="w-full max-w-md h-auto object-cover shadow-lg opacity-0 animate-fadeIn"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/5 md:pl-12 text-center md:text-left mt-6 md:mt-0 opacity-0 animate-fadeIn">
            <h2 className="text-5xl font-bold text-white">Hi,</h2>
            <h1 className="text-3xl font-bold text-white mt-4">
              I'm Naga Dhanya.
            </h1>
            <p className="text-xl font-bold text-white mt-2">
              Sr. UI Frontend Developer 💻
            </p>

            {/* Social Links + Portfolio */}
            <div className="mt-8 flex gap-4 justify-center md:justify-start items-center">
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/dhanya-n-427bb1210/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-2xl"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/ndhanya/NagaDhanya_Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white text-2xl"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <Link
                to="/portfolio"
                className="text-white font-medium px-6 py-2 border border-white rounded hover:bg-white hover:text-indigo-700 transition"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      <Popup isOpen={showContact} onClose={() => setShowContact(false)}>
        <div style={{ textAlign: "center", fontSize: "18px" }}>
          <h3 style={{ marginBottom: "12px" }}>Contact Me:</h3>
          <h2 style={{ margin: "0 0 8px 0" }}>Naga Dhanya</h2>
          <p style={{ margin: "4px 0" }}>Phone: +1-(479)-388-1947</p>
          <p style={{ margin: "4px 0" }}>Email: dhanya.2048@gmail.com</p>
        </div>
      </Popup>

      <audio src={music} ref={audioRef} loop />
    </div>
  );
}
