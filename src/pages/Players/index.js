import React, { useState, useRef, useEffect } from "react";
import { usePlayers } from "../../modules/Players/usePlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import PlayersSearchForm from "../../components/PlayersSearchForm";
import HelpMessage from "../../components/HelpMessage";
import PlayersList from "../../components/PlayersList";
import s from "./index.module.css";

const Players = () => {
  const [hasSearchedPlayer, setHasSearchedPlayer] = useState(false);
  const [playerName, setPlayersName] = useState("");
  const playerNameRef = useRef();

  const { data: players, refetch, isFetching, error } = usePlayers({
    name: playerName,
  });

  useEffect(() => {
    playerNameRef.current.focus();
  }, []);

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
          <PlayersSearchForm inputRef={playerNameRef} onSubmit={onPlayerSearch} />

          {isFetching ? (
            <HelpMessage className={s.spinner}>Loading...</HelpMessage>
          ) : error ? (
            <HelpMessage className={s.spinner}>Error</HelpMessage>
          ) : (
            <PlayersList
              players={players}
              emptyListMessage={
                hasSearchedPlayer && "Players not found for " + playerName
              }
            />
          )}
        </section>
      </Main>
    </Screen>
  );
};

export default Players;
