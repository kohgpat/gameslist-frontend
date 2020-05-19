import React from "react";
import PlayerCard from "../PlayerCard";
import s from "./index.module.css";

const PlayersList = ({ players, selected, onClick, emptyListMessage }) => {
  return (
    <ul className={s.list}>
      {players.map((player) => (
        <li key={player.id} className={s.listItem}>
          <PlayerCard
            player={player}
            selected={selected && selected.id === player.id}
            onClick={onClick}
            roundBorders
          />
        </li>
      ))}

      {players.length === 0 && <span>{emptyListMessage}</span>}
    </ul>
  );
};

PlayersList.defaultProps = {
  players: [],
  emptyListMessage:
    "No players found. You could add a player on the new game page.",
};

export default PlayersList;
