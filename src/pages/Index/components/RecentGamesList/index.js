import React, { useEffect } from "react";
import { useGames } from "../../../../hooks/Games/useGames";
import Title from "../../../../components/Title";
import GamesList from "../../../../components/GamesList";

const RecentGamesList = () => {
  const {
    data: { games } = { games: [], hasMore: false },
    isFetching,
    error,
    refetch,
  } = useGames({ page: 0, pageSize: 5 });

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <section>
      <Title as="h4">Recent Games</Title>
      <GamesList games={games} isFetching={isFetching} error={error} />
    </section>
  );
};

export default RecentGamesList;
