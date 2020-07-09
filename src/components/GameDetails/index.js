import React from "react";
import PlayersList from "../PlayersList";
import s from "./index.module.css";

const GameDetails = ({ game }) => {
  if (!game) {
    return null;
  }

  return (
    <div>
      <section className={s.stats}>
        <div className={s.stat}>
          <h4 className={s.statName}>Winner</h4>
          <PlayersList players={[game.winner]} selected={game.winner} />
        </div>

        <div className={s.stat}>
          <h4 className={s.statName}>Players</h4>
          <PlayersList players={game.players} />
        </div>
      </section>
    </div>
  );
};

export default GameDetails;
