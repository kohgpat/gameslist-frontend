import React from "react";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";
import GameList from "../../components/GameList";

const players = [
  {
    id: 1,
    name: "Alice",
  },
  {
    id: 2,
    name: "Bob",
  },
  {
    id: 3,
    name: "Mark",
  },
  {
    id: 4,
    name: "Walter",
  },
];

let id = 1;

const generateGames = () => {
  const games = [];

  for (let i = 0; i < 10; i++) {
    const game = {
      players: players,
      id: id++,
      winner: 1,
    };

    games.push(game);
  }

  return games;
};

const games = generateGames();

const Index = () => {
  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Top Players</Title>
          <PlayersList players={players} />
        </section>

        <section>
          <Title as="h4">Recent Games</Title>
          <GameList games={games} />
        </section>
      </Main>
    </Screen>
  );
};

export default Index;
