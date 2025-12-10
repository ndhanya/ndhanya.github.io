import React, { useState, useRef } from "react";
import music from "../assets/music/audio.mp3";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setPlay(!play);
    if (!play) audioRef.current.play();
    else audioRef.current.pause();
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center gap-4 px-6 py-3 bg-white bg-opacity-80 backdrop-blur-md z-50 shadow-md">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold"
          style={{ textDecoration: "none", color: "#000" }}
        >
          ND
        </NavLink>

        {/* Play / Pause Button */}
        {!play ? (
          <span
            className="material-symbols-outlined cursor-pointer text-xl"
            onClick={handleClick}
          >
            play_arrow
          </span>
        ) : (
          <span
            className="material-symbols-outlined cursor-pointer text-xl"
            onClick={handleClick}
          >
            pause
          </span>
        )}
      </header>

      <audio src={music} ref={audioRef} loop />
    </>
  );
}
