import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import s from "./index.module.css";

const GameResult = ({ game }) => {
  const winner = game.players.find((player) => player.id === game.winner.id);

  return (
    <Link to={`/games/${game.id}`} className={s.gameLink}>
      <div className={s.gameResult}>
        <Title as="h5">Game #{game.id}</Title>
        <div>Number of players: {game.players.length}</div>
        <div>Winner: {winner.name}</div>
      </div>
    </Link>
  );
};

export default GameResult;
