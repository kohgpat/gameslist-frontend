import React from "react";
import GameResult from "../GameResult";
import s from "./index.module.css";

const GamesList = ({ games }) => {
  return (
    <ul className={s.list}>
      {games.map((game) => (
        <li key={game.id} className={s.listItem}>
          <GameResult game={game} />
        </li>
      ))}
    </ul>
  );
};

GamesList.defaultProps = {
  games: [],
};

export default GamesList;
