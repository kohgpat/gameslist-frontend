import React from "react";
import GameResult from "../GameResult";
import s from "./index.module.css";

const GamesList = ({ games, emptyListMessage }) => {
  return (
    <ul className={s.list}>
      {games.map((game) => (
        <li key={game.id} className={s.listItem}>
          <GameResult game={game} />
        </li>
      ))}

      {games.length === 0 && <span>{emptyListMessage}</span>}
    </ul>
  );
};

GamesList.defaultProps = {
  games: [],
  emptyListMessage:
    "No games found. You could add a game on the new game page.",
};

export default GamesList;
