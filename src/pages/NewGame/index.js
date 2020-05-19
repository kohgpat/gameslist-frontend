import React from "react";
import { FiPlusCircle, FiArrowUpCircle } from "react-icons/fi";
import { useNewGame } from "../../modules/NewGame/useNewGame";
import { usePlayers } from "../../modules/Players/usePlayers";
import Screen from "../../components/Screen";
import Main from "../../components/Main";
import Topbar from "../../components/Topbar";
import Title from "../../components/Title";
import IconButton from "../../components/IconButton";
import Button from "../../components/Button";
import GamePlayersList from "../../components/GamePlayersList";
import SelectPlayerDialog from "../../components/SelectPlayerDialog";
import ValidationDialog from "../../components/ValidationDialog";
import s from "./index.module.css";

const NewGame = () => {
  const { data: players } = usePlayers();
  const {
    playersInGame,
    winner,
    playersSelectVisible,
    validationDialogVisible,
    setWinner,
    togglePlayerInGame,
    togglePlayersSelect,
    setPlayersSelectVisible,
    setValidationDialogVisible,
    submitGame,
  } = useNewGame();

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
              <Button type="button" small onClick={togglePlayersSelect}>
                Change
              </Button>
            ) : (
              <IconButton
                type="button"
                onClick={togglePlayersSelect}
                disabled={playersInGame.length === 4}
              >
                <FiPlusCircle className={s.addPlayerButtonIcon} />
              </IconButton>
            )}
          </div>

          <GamePlayersList
            players={playersInGame}
            winner={winner}
            onSelect={setWinner}
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
