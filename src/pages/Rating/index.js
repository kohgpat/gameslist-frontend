import React, { useState, useRef, useEffect } from "react";
import { useTopPlayers } from "../../modules/Players/useTopPlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HelpMessage from "../../components/HelpMessage";
import PlayersList from "../../components/PlayersList";
import s from "./index.module.css";

const Rating = () => {
  const [hasSearchedPlayer, setHasSearchedPlayer] = useState(false);
  const [playerName, setPlayersName] = useState("");
  const playerNameRef = useRef();

  const { data: players, isFetching, error, refetch } = useTopPlayers({
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
          <Title as="h4">Top Players</Title>
          <form className={s.form} onSubmit={onPlayerSearch}>
            <Input
              id="players-search"
              placeholder="Search player by name"
              ref={playerNameRef}
            />
            <Button type="submit">Search</Button>
          </form>

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

export default Rating;
