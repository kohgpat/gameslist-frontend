import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const PlayerCard = ({ player, roundBorders }) => {
  return (
    <div className={cn(s.player, roundBorders && s.playerRoundBorders)}>
      <span className={s.playerName}>{player.name}</span>
    </div>
  );
};

export default PlayerCard;
