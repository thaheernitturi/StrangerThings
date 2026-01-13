import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const videos = [
    "/videos/moment1.mp4",
    "/videos/moment2.mp4",
  ];

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
      setIsPlaying(false);
    }
  }, [index]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const next = () => {
    setIndex((i) => (i + 1) % videos.length);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + videos.length) % videos.length);
  };

  return (
    <div className="hero">
     
      <button className="nav-btn left" onClick={prev}>
        ❮
      </button>

      
      <video
        ref={videoRef}
        src={videos[index]}
        className="hero-video"
        playsInline
        preload="auto"
        controls={false}
      />

    
      <button className="play-btn" onClick={togglePlay}>
        {isPlaying ? "⏸" : "▶"}
      </button>

      
      <button className="nav-btn right" onClick={next}>
        ❯
      </button>
    </div>
  );
};

export default Hero;
