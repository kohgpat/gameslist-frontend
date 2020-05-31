import React, { useEffect } from "react";
import { useGames } from "../../hooks/Games/useGames";
import { useTopPlayers } from "../../hooks/Players/useTopPlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersList from "../../components/PlayersList";
import GamesList from "../../components/GamesList";

const Index = () => {
  const {
    data: { games } = { games: [], hasMore: false },
    isFetching: isFetchingGames,
    error: fetchingGamesError,
    refetch: gamesRefetch,
  } = useGames({ page: 0, pageSize: 5 });
  const {
    data: topPlayers,
    isFetching: isFetchingTopPlayers,
    error: fetchingTopPlayersError,
    refetch: topPlayersRefetch,
  } = useTopPlayers();

  useEffect(() => {
    topPlayersRefetch();
    gamesRefetch();
  }, [topPlayersRefetch, gamesRefetch]);

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Top Players</Title>
          <PlayersList
            players={topPlayers}
            isFetching={isFetchingTopPlayers}
            error={fetchingTopPlayersError}
          />
        </section>

        <section>
          <Title as="h4">Recent Games</Title>
          <GamesList
            games={games}
            isFetching={isFetchingGames}
            error={fetchingGamesError}
          />
        </section>
      </Main>
    </Screen>
  );
};

export default Index;
