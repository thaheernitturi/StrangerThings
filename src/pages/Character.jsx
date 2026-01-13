import { useState } from "react";
import "./Character.css";

import Hero from "./Hero";

import char1 from "../assets/char1.png";
import char2 from "../assets/char2.png";
import char3 from "../assets/char3.png";
import char4 from "../assets/char4.png";
import char5 from "../assets/char5.png";
import char6 from "../assets/char6.png";
import char7 from "../assets/char7.png";
import char8 from "../assets/char8.png";
import char9 from "../assets/char9.png";
import char10 from "../assets/char10.png";
import char11 from "../assets/char11.png";
import char12 from "../assets/char12.png";
import char13 from "../assets/char13.png";
import char14 from "../assets/char14.png";



const characters = [
  { name: "Steve Harrington", img: char1, desc: "The babysitter who became a warrior." },
  { name: "Eleven", img: char2, desc: "Born in darkness. Raised by love." },
  { name: "Max Mayfield", img: char3, desc: "Fearless even when the world collapses." },
  { name: "Lucas Sinclair", img: char4, desc: "Courage forged by loyalty." },
  { name: "Dustin Henderson", img: char5, desc: "Brains, heart, and humor." },
  { name: "Nancy Wheeler", img: char6, desc: "Truth seeker in a cursed town." },
  { name: "Robin Buckley", img: char7, desc: "Brilliant, bold, unapologetic." },
  { name: "Will Byers", img: char8, desc: "Touched by the Upside Down forever." },
  { name: "Mike Wheeler", img: char9, desc: "Faith is his weapon." },
  { name: "Jonathan Byers", img: char10, desc: "Quiet strength, endless love." },
  { name: "Joyce Byers", img: char11, desc: "A mother who never stops fighting." },
  { name: "Jim Hopper", img: char12, desc: "Broken. Brave. Relentless." },
  { name: "Delightful Derek", img: char13, desc: "A bully with hidden layers." },
  { name: "Holly Wheeler", img: char14, desc: "Innocence untouched… for now." },
];

const Character = () => {
  const [showHero, setShowHero] = useState(false);
  const [selectedChar, setSelectedChar] = useState(null);
  const openHero = (char) => {
    setSelectedChar(char);
    setShowHero(true);
  };

  return (
    <>      
      <div className="vhs-overlay" />
      <section className="characters-container">
        {characters.map((char, i) => (
          <div key={i} className={`character-block ${i % 2 === 0 ? "right" : "left"}`}>
            <div className="character-card">
              <div className="char-image-box">
                <img src={char.img} alt={char.name} />
              </div>
              <div className="character-text">
                <h1 className="char-name" onClick={() => openHero(char)}>
                  {char.name}
                </h1>
                <p>{char.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>      
      {showHero && (
        <Hero
          character={selectedChar}
          onClose={() => setShowHero(false)}
        />
      )}
    </>
  );
};

export default Character;
