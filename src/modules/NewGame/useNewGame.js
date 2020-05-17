import { useReducer } from "react";

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

export const useNewGame = () => {
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

  return {
    playersInGame: state.playersInGame,
    winner: state.winner,
    playersSelectVisible: state.playersSelectVisible,
    validationDialogVisible: state.validationDialogVisible,
    addToGame,
    removeFromGame,
    setWinner,
    togglePlayerInGame,
    togglePlayersSelect,
    setPlayersSelectVisible,
    setValidationDialogVisible,
    submitGame,
  };
};
