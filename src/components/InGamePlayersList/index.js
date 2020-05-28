import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const InGamePlayersList = ({ players, winner, onSelect }) => {
  if (players.length === 0) {
    return (
      <div className={s.emptyListMessage}>
        No players selected. Please add up to 4 players.
      </div>
    );
  }

  return (
    <ul className={s.list}>
      {players.map((player) => (
        <li key={player.id} className={s.listItem}>
          <button
            type="button"
            className={cn(
              s.player,
              winner && winner.id === player.id && s.playerSelected
            )}
            onClick={() => onSelect(player)}
          >
            {player.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default InGamePlayersList;
