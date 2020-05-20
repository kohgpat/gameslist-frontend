import React from "react";
import { useTopPlayers } from "../../modules/Players/useTopPlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";

const Rating = () => {
  const { data: players } = useTopPlayers();

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Top Players</Title>
          <PlayersList players={players} />
        </section>
      </Main>
    </Screen>
  );
};

export default Rating;
