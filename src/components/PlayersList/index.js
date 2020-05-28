import React from "react";
import PlayerCard from "../PlayerCard";
import HelpMessage from "../HelpMessage";
import LoadingItem from "../LoadingItem";
import s from "./index.module.css";

const PlayersList = ({
  players,
  selected,
  onClick,
  emptyListMessage,
  isFetching,
  error,
  asLinks,
}) => {
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
      {players.map((player) => (
        <li key={player.id} className={s.listItem}>
          <PlayerCard
            player={player}
            selected={selected && selected.id === player.id}
            onClick={onClick}
            roundBorders
            asLink={asLinks}
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
  asLinks: false,
};

export default PlayersList;
