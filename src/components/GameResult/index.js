import React from "react";
import Title from "../Title";
import s from "./index.module.css";

const GameResult = ({ game }) => {
  const winner = game.players.find((player) => player.id === game.winner);

  return (
    <div className={s.gameResult}>
      <Title as="h5">Game #{game.id}</Title>
      <div>Number of players: {game.players.length}</div>
      <div>Winner: {winner.name}</div>
    </div>
  );
};

export default GameResult;