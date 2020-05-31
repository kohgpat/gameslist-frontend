import React, { useEffect } from "react";
import { useTopPlayers } from "../../../../hooks/Players/useTopPlayers";
import Title from "../../../../components/Title";
import PlayersList from "../../../../components/PlayersList";

const TopPlayersList = () => {
  const { data: players, isFetching, error, refetch } = useTopPlayers();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <section>
      <Title as="h4">Top Players</Title>
      <PlayersList players={players} isFetching={isFetching} error={error} />
    </section>
  );
};

export default TopPlayersList;
