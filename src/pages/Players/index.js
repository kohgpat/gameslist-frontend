import React from "react";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";

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

const Players = () => {
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

export default Players;
