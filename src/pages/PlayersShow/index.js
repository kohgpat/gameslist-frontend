import React from "react";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";

const PlayersShow = () => {
  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Player</Title>
          
          Player's detail information
        </section>
      </Main>
    </Screen>
  );
};

export default PlayersShow;
