import React, { useState, useEffect } from "react";
import "./FinalStory.css";

// ✅ CORRECT IMAGE IMPORTS
import img1 from "../assets/st1.png";
import img2 from "../assets/st2.png";
import img3 from "../assets/st3.png";
import img4 from "../assets/st4.png";
import img5 from "../assets/st5.png";

const images = [img1, img2, img3, img4, img5];

const FinalStory = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    /* PAGE WRAPPER — pushes below navbar */
    <div className="finalstory-page">
      <div className="story-bg">
        <div className="story-container">
          <h1 className="story-title">Beyond the Waterfall</h1>

          <p className="story-text">
            The night the world almost ended did not feel loud. There was no
            scream when the final gate sealed, no explosion to tear Hawkins
            apart—only silence. Near the waterfall, Eleven stepped forward.
            She didn’t look back. Light swallowed her whole, and when it faded,
            the gate was gone. So was she.
          </p>

          <p className="story-text">
            Hawkins survived, but Mike never moved on. Months passed, seasons
            changed, yet his belief never faded. With Hopper by his side, he
            searched forests and forgotten places—following hope instead of
            logic.
          </p>

          <p className="story-text">
            Beyond the waterfall, they found her. Alive. Free. When Mike said
            her name, Eleven fell into his arms, and for the first time, she
            wasn’t alone. She came home.
          </p>

          <p className="story-text">
            Their wedding was simple. Eleven walked down the aisle holding
            Hopper’s arm. Steve smiled proudly. Max and Lucas held hands. Will
            stood beside the boy who loved him. Dustin and Suzie laughed through
            happy tears. No monsters watched—only family.
          </p>

          <p className="story-text">
            Years later, under a golden sunset, Mike and Eleven sat with their
            daughter between them. “Were you ever scared of the dark?” she
            asked. Eleven smiled. “Not anymore.”
          </p>

          <blockquote className="story-quote">
            She walked into the darkness to save the world,  
            and walked back into the light to build one of her own.
          </blockquote>

          {/* SLIDESHOW */}
          <div className="slideshow">
            <img
              src={images[current]}
              alt="Stranger Things memory"
              className="slide-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalStory;
