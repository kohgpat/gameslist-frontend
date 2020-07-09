import React from "react";
import s from "./index.module.css";

const PlayerDetails = ({ player }) => {
  if (!player) {
    return null;
  }

  return (
    <div>
      <h1 className={s.playerName}>{player.name}</h1>

      <section className={s.stats}>
        <div className={s.stat}>
          <h4 className={s.statName}>Number of wins</h4>
          <span className={s.statValue}>{player.stats.wins}</span>
        </div>

        <div className={s.stat}>
          <h4 className={s.statName}>Number of games</h4>
          <span className={s.statValue}>{player.stats.numberOfGames}</span>
        </div>
      </section>
    </div>
  );
};

export default PlayerDetails;
