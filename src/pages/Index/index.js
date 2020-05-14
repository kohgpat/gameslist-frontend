import React from "react";
import { GamesProvider, useGames } from "../../contexts/Games";
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

const Index = () => {
  const { games } = useGames();

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

const IndexPage = () => {
  return (
    <GamesProvider>
      <Index />
    </GamesProvider>
  );
};

export default IndexPage;
