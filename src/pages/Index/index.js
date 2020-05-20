import React from "react";
import { useGames } from "../../modules/Games/useGames";
import { useTopPlayers } from "../../modules/Players/useTopPlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";
import GamesList from "../../components/GamesList";
import HelpMessage from "../../components/HelpMessage";
import s from "./index.module.css";

const Index = () => {
  const {
    data: games,
    isFetching: isFetchingGames,
    error: fetcingGamesError,
  } = useGames();
  const {
    data: topPlayers,
    isFetching: isFetchingTopPlayers,
    error: fetcingTopPlayersError,
  } = useTopPlayers();

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Top Players</Title>

          {isFetchingTopPlayers ? (
            <HelpMessage className={s.spinner}>Loading...</HelpMessage>
          ) : fetcingTopPlayersError ? (
            <HelpMessage className={s.spinner}>Error</HelpMessage>
          ) : (
            <PlayersList players={topPlayers} />
          )}
        </section>

        <section>
          <Title as="h4">Recent Games</Title>
          
          {isFetchingGames ? (
            <HelpMessage className={s.spinner}>Loading...</HelpMessage>
          ) : fetcingGamesError ? (
            <HelpMessage className={s.spinner}>Error</HelpMessage>
          ) : (
            <GamesList games={games} />
          )}
        </section>
      </Main>
    </Screen>
  );
};

export default Index;
