import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const videos = [
    "/videos/moment1.mp4",
    "/videos/moment2.mp4",
  ];

  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [index]);

  const next = () => {
    setIndex((i) => (i + 1) % videos.length);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + videos.length) % videos.length);
  };

  return (
    <div className="hero">
      <button className="nav-btn left" onClick={prev}>❮</button>

      <video
        ref={videoRef}
        src={videos[index]}
        className="hero-video"
        autoPlay
        loop                
        playsInline
        preload="auto"
        controls={false}
      />

      <button className="nav-btn right" onClick={next}>❯</button>
    </div>
  );
};

export default Hero;
