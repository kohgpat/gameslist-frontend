import React, { useEffect, useState } from "react";
import { useGames } from "../../modules/Games/useGames";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import GamesList from "../../components/GamesList";
import Pagination from "../../components/Pagination";

const Games = () => {
  const [page, setPage] = useState(0);
  const [pageSize] = useState(10);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const {
    data: { games, hasMore } = { games: [], hasMore: false },
    isFetching,
    error,
    refetch,
  } = useGames({
    page,
    pageSize,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Games</Title>
          <GamesList games={games} isFetching={isFetching} error={error} />
          <Pagination
            page={page}
            pageSize={pageSize}
            hasMore={hasMore}
            onPageSelect={handlePageChange}
          />
        </section>
      </Main>
    </Screen>
  );
};

export default Games;
