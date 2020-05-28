import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import s from "./index.module.css";

const PlayerCard = ({ player, roundBorders }) => {
  return (
    <Link to={`/players/${player.id}`} className={s.playerLink}>
      <div className={cn(s.player, roundBorders && s.playerRoundBorders)}>
        <span className={s.playerName}>{player.name}</span>
      </div>
    </Link>
  );
};

export default PlayerCard;
