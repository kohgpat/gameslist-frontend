import React from "react";
import { PlayersProvider } from "../../contexts/Players";
import { usePlayers } from "../../modules/Players/usePlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";

const Players = () => {
  const { players } = usePlayers();

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Players</Title>
          <PlayersList players={players} />
        </section>
      </Main>
    </Screen>
  );
};

const PlayersPage = () => {
  return (
    <PlayersProvider>
      <Players />
    </PlayersProvider>
  );
};

export default PlayersPage;
