import React from "react";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";
import { players } from "../../constants";

const Rating = () => {
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
