import React, { useState } from "react";
import { FiPlusCircle, FiArrowUpCircle } from "react-icons/fi";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import IconButton from "../../components/IconButton";
import Button from "../../components/Button";
import PlayersList from "../../components/PlayersList";
import SelectPlayerDialog from "../../components/SelectPlayerDialog";
import ValidationDialog from "../../components/ValidationDialog";
import { players } from "../../constants";
import s from "./index.module.css";

const NewGame = () => {
  const [playersSelectVisible, setPlayersSelectVisible] = useState(false);
  const [validationDialogVisible, setValidationDialogVisible] = useState(false);
  const [playersInGame, setPlayersInGame] = useState([]);
  const [winner, setWinner] = useState(undefined);

  const addToGame = (player) => {
    if (playersInGame.length === 4) {
      return;
    }

    setPlayersInGame([...playersInGame, player]);
  };

  const removeFromGame = (player) => {
    const idx = playersInGame.findIndex((p) => p.id === player.id);
    setPlayersInGame([
      ...playersInGame.slice(0, idx),
      ...playersInGame.slice(idx + 1),
    ]);
  };

  const togglePlayerInGame = (player) => {
    if (playersInGame.includes(player)) {
      removeFromGame(player);
    } else {
      addToGame(player);
    }
  };

  const submitGame = () => {
    if (!playersInGame.length || !winner) {
      setValidationDialogVisible(true);
    }
  };

  return (
    <Screen>
      <Topbar />
      <Main>
        <Title as="h2">New Game</Title>

        <section>
          <div className={s.sectionBar}>
            <Title as="h4" noMargin>
              Players
            </Title>

            {!!playersInGame.length ? (
              <Button
                type="button"
                small
                onClick={() => setPlayersSelectVisible(!playersSelectVisible)}
              >
                Change
              </Button>
            ) : (
              <IconButton
                type="button"
                onClick={() => setPlayersSelectVisible(!playersSelectVisible)}
                disabled={playersInGame.length === 4}
              >
                <FiPlusCircle className={s.addPlayerButtonIcon} />
              </IconButton>
            )}
          </div>

          <PlayersList
            players={playersInGame}
            selected={winner}
            onClick={setWinner}
            removeFromGame={removeFromGame}
          />

          <section>
            <Title as="h4">Winner</Title>

            <span className={s.winner}>
              {winner ? winner.name : "No winner selected"}
            </span>
          </section>

          <p className={s.helpText}>Select a winner and submit game results</p>

          <Button type="button" icon={FiArrowUpCircle} onClick={submitGame}>
            Submit game
          </Button>

          <SelectPlayerDialog
            isVisible={playersSelectVisible}
            onDismiss={() => setPlayersSelectVisible(false)}
            players={players}
            playersInGame={playersInGame}
            onSelect={(player) => togglePlayerInGame(player)}
          />

          <ValidationDialog
            isVisible={validationDialogVisible}
            onDismiss={() => setValidationDialogVisible(false)}
            winner={winner}
            playersInGame={playersInGame}
          />
        </section>
      </Main>
    </Screen>
  );
};

export default NewGame;
