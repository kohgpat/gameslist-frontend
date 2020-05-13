import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const PlayerShort = ({
  player,
  selected,
  onClick,
  roundBorders,
}) => {
  return (
    <div
      className={cn(
        s.player,
        selected && s.playerSelected,
        roundBorders && s.playerRoundBorders
      )}
      onClick={() => onClick(player)}
    >
      <span className={s.playerName}>{player.name}</span>
    </div>
  );
};

PlayerShort.defaultProps = {
  onClick: () => {},
};

export default PlayerShort;
