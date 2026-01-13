import React from "react";
import close from "../assets/close.png";
import "./Hero.css";

const Hero = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div className="hero-overlay">
      <div className="hero-card vhs-flicker">
        <img
          src={close}
          alt="close"
          className="hero-close"
          onClick={onClose}
        />

        <div className="hero-img-wrapper">
          <img src={character.img} alt={character.name} />
        </div>

        <h2 className="hero-title">{character.name}</h2>
        <p className="hero-desc">{character.desc}</p>

        <div className="scanlines" />
      </div>
    </div>
  );
};

export default Hero;
