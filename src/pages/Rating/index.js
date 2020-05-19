import React from "react";
import { usePlayers } from "../../modules/Players/usePlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";

const Rating = () => {
  const { data: players } = usePlayers();

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
