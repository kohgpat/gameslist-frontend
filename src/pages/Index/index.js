import React from "react";
import { GamesProvider, useGames } from "../../contexts/Games";
import { PlayersProvider, usePlayers } from "../../contexts/Players";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";
import GamesList from "../../components/GamesList";

const Index = () => {
  const { games } = useGames();
  const { topPlayers } = usePlayers();

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Top Players</Title>
          <PlayersList players={topPlayers} />
        </section>

        <section>
          <Title as="h4">Recent Games</Title>
          <GamesList games={games} />
        </section>
      </Main>
    </Screen>
  );
};

const IndexPage = () => {
  return (
    <GamesProvider>
      <PlayersProvider>
        <Index />
      </PlayersProvider>
    </GamesProvider>
  );
};

export default IndexPage;
