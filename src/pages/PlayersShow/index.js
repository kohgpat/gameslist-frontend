import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlayer } from "../../modules/Players/usePlayer";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";

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
          <Title as="h4">Player</Title>

          {player && <div>{player.name}</div>}
        </section>
      </Main>
    </Screen>
  );
};

export default PlayersShow;
