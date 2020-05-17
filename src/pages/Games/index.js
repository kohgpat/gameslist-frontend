import React from "react";
import { useGames } from "../../modules/Games/useGames";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import GamesList from "../../components/GamesList";

const Games = () => {
  const { games } = useGames();

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Games</Title>
          <GamesList games={games} />
        </section>
      </Main>
    </Screen>
  );
};


export default Games;
