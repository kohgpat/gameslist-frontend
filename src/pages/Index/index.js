import React from "react";
import { useGames } from "../../modules/Games/useGames";
import { useTopPlayers } from "../../modules/Players/useTopPlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";
import GamesList from "../../components/GamesList";

const Index = () => {
  const { data: games } = useGames();
  const { data: topPlayers } = useTopPlayers();

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

export default Index;
