import React, { useReducer } from "react";
import { FiPlusCircle, FiArrowUpCircle } from "react-icons/fi";
import { GamesProvider } from "../../contexts/Games";
import { PlayersProvider } from "../../contexts/Players";
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

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PLAYERS_SELECT_VISIBLE": {
      return {
        ...state,
        playersSelectVisible: action.visible,
      };
    }
    case "SET_VALIDATION_DIALOG_VISIBLE": {
      return {
        ...state,
        validationDialogVisible: action.visible,
      };
    }
    case "ADD_PLAYER_TO_GAME": {
      if (state.playersInGame.length === 4) {
        return state;
      }

      return {
        ...state,
        playersInGame: [...state.playersInGame, action.player],
      };
    }
    case "REMOVE_PLAYER_FROM_GAME": {
      const idx = state.playersInGame.findIndex(
        (p) => p.id === action.player.id
      );

      const winner =
        state.winner?.id === action.player.id ? undefined : state.winner;

      return {
        ...state,
        playersInGame: [
          ...state.playersInGame.slice(0, idx),
          ...state.playersInGame.slice(idx + 1),
        ],
        winner,
      };
    }
    case "SET_WINNER": {
      return {
        ...state,
        winner: action.player,
      };
    }
    default: {
      throw new Error("Unsupported action: ", action);
    }
  }
};

const NewGame = () => {
  const { players } = usePlayers();

  const [state, dispatch] = useReducer(reducer, {
    playersSelectVisible: false,
    validationDialogVisible: false,
    playersInGame: [],
    winner: undefined,
  });

  const addToGame = (player) => {
    dispatch({ type: "ADD_PLAYER_TO_GAME", player });
  };

  const removeFromGame = (player) => {
    dispatch({ type: "REMOVE_PLAYER_FROM_GAME", player });
  };

  const togglePlayerInGame = (player) => {
    if (state.playersInGame.includes(player)) {
      removeFromGame(player);
    } else {
      addToGame(player);
    }
  };

  const togglePlayersSelect = () => {
    dispatch({
      type: "SET_PLAYERS_SELECT_VISIBLE",
      visible: !state.playersSelectVisible,
    });
  };

  const setPlayersSelectVisible = (visible) => {
    dispatch({
      type: "SET_PLAYERS_SELECT_VISIBLE",
      visible,
    });
  };

  const setValidationDialogVisible = (visible) => {
    dispatch({
      type: "SET_VALIDATION_DIALOG_VISIBLE",
      visible,
    });
  };

  const setWinner = (player) => {
    dispatch({ type: "SET_WINNER", player });
  };

  const submitGame = () => {
    if (!state.playersInGame.length || !state.winner) {
      dispatch({ type: "SET_VALIDATION_DIALOG_VISIBLE", visible: true });
    }
  };

  const {
    playersInGame,
    winner,
    playersSelectVisible,
    validationDialogVisible,
  } = state;

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

const NewGamePage = () => {
  return (
    <GamesProvider>
      <PlayersProvider>
        <NewGame />
      </PlayersProvider>
    </GamesProvider>
  );
};

export default NewGamePage;
