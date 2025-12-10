import React, { useRef, useState } from "react";

export default function MusicPlayer({ src }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setPlaying(!playing);
    if (!playing) audioRef.current.play();
    else audioRef.current.pause();
  };

  return (
    <div className="absolute top-4 right-4 z-20">
      <button
        className="bg-indigo-600 text-white px-3 py-1 rounded"
        onClick={togglePlay}
      >
        {playing ? "Pause" : "Play"}
      </button>
      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
