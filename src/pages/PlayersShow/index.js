import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayer } from "../../modules/Players/usePlayer";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import LoadingItem from "../../components/LoadingItem";
import HelpMessage from "../../components/HelpMessage";
import s from "./index.module.css";

const PlayersShow = () => {
  const params = useParams();
  const { data: player, isFetching, error, refetch } = usePlayer(params.id);

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

          {player && (
            <>
              <Title as="h4">Player</Title>
              {player.name}
            </>
          )}
        </section>
      </Main>
    </Screen>
  );
};

export default PlayersShow;
