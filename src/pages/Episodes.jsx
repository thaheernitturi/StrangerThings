import React from "react";
import { episodesData } from "../Data/episodesData";
import "./Episodes.css";

const Episodes = () => {
  
  const sortedEpisodes = [...episodesData].sort(
    (a, b) => b.rating - a.rating
  );

  return (
    <section className="episodes-page">
      <h1 className="episodes-title">Top Ranked Episodes</h1>

      <div className="episodes-list">
        {sortedEpisodes.map((ep, index) => (
          <div
            key={`${ep.season}-${ep.episode}`}
            className="episode-card"
            onClick={() => window.open(ep.netflixUrl, "_blank")}
          >
            <div className="episode-rank">#{index + 1}</div>

            <div className="episode-info">
              <h2>{ep.title}</h2>
              <p className="episode-meta">
                Season {ep.season} • Episode {ep.episode}
              </p>
              <p className="episode-desc">{ep.description}</p>
            </div>

            <div className="episode-rating">
              ⭐ {ep.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Episodes;
