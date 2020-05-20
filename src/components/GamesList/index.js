import React from "react";
import GameResult from "../GameResult";
import HelpMessage from "../HelpMessage";
import LoadingItem from "../LoadingItem";
import s from "./index.module.css";

const GamesList = ({ games, emptyListMessage, isFetching, error }) => {
  if (isFetching) {
    return (
      <>
        <LoadingItem className={s.loadingItem} />
        <LoadingItem className={s.loadingItem} />
        <LoadingItem className={s.loadingItem} />
      </>
    );
  }

  if (error) {
    return <HelpMessage className={s.spinner}>Error</HelpMessage>;
  }

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
