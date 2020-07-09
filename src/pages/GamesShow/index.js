import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../../hooks/Games/useGame";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import LoadingItem from "../../components/LoadingItem";
import HelpMessage from "../../components/HelpMessage";
import GameDetails from "../../components/GameDetails";
import s from "./index.module.css";

const GamesShow = () => {
  const params = useParams();
  const { data: game, isFetching, error, refetch } = useGame(params.id);

  useEffect(() => {
    refetch();
  }, [refetch, params.id]);

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          {isFetching && (
            <>
              <LoadingItem className={s.loadingItem} />
              <LoadingItem className={s.loadingItem} />
              <LoadingItem className={s.loadingItem} />
            </>
          )}

          {error && (
            <HelpMessage message="Error occured. Please try to reload page." />
          )}

          {game && (
            <>
              <Title as="h4">Game</Title>
              <GameDetails game={game} />
            </>
          )}
        </section>
      </Main>
    </Screen>
  );
};

export default GamesShow;
