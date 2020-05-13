import React from "react";
import PlayerShort from "../PlayerShort";
import s from "./index.module.css";

const PlayersList = ({ players, selected, onClick }) => {
  return (
    <ul className={s.list}>
      {players.map((player) => (
        <li key={player.id} className={s.listItem}>
          <PlayerShort
            player={player}
            selected={selected && selected.id === player.id}
            onClick={onClick}
            roundBorders
          />
        </li>
      ))}

      {players.length === 0 && (
        <span className={s.emptyListMessage}>
          No players selected. Please add up to 4 players.
        </span>
      )}
    </ul>
  );
};

export default PlayersList;
