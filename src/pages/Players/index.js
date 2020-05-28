import React, { useState, useRef, useEffect } from "react";
import { usePlayers } from "../../modules/Players/usePlayers";
import { usePagination } from "../../modules/Pagination/usePagination";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersSearchForm from "../../components/PlayersSearchForm";
import PlayersList from "../../components/PlayersList";
import Pagination from "../../components/Pagination";

const Players = () => {
  const [hasSearchedPlayer, setHasSearchedPlayer] = useState(false);
  const [playerName, setPlayersName] = useState("");
  const playerNameRef = useRef();

  const { page, pageSize, handlePageChange } = usePagination();

  const {
    data: { players, hasMore } = { players: [], hasMore: false },
    isFetching,
    error,
    refetch,
  } = usePlayers({
    name: playerName,
    page,
    pageSize,
  });

  useEffect(() => {
    playerNameRef.current.focus();
    refetch();
  }, [refetch]);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const onPlayerSearch = (e) => {
    e.preventDefault();
    setHasSearchedPlayer(true);
    setPlayersName(e.target.elements["players-search"].value);
    refetch();
  };

  return (
    <Screen>
      <Topbar />
      <Main>
        <section>
          <Title as="h4">Players</Title>
          <PlayersSearchForm
            inputRef={playerNameRef}
            onSubmit={onPlayerSearch}
          />
          <PlayersList
            players={players}
            emptyListMessage={hasSearchedPlayer && "Players not found"}
            isFetching={isFetching}
            error={error}
          />
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

export default Players;
