import React, { createContext, useContext, useReducer } from "react";
import { players } from "../../constants";

const PlayersContext = createContext();

PlayersContext.displayName = "PlayersContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER": {
      return {
        ...state,
        players: [...state.players, action.player],
      };
    }
    default: {
      throw new Error("Unexpected action passed to useCart reducer");
    }
  }
};

const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    players: players || [],
  });

  const addPlayer = (player) => {
    dispatch({ type: "ADD_PLAYER", player });
  };

  const getPlayers = (state) => {
    return state.players;
  };

  const getTopPlayers = (state) => {
    const players = getPlayers(state);
    return players.sort((a, b) => a.stats.wins > b.stats.wins).slice(0, 5);
  };

  return (
    <PlayersContext.Provider
      value={{
        players: getPlayers(state),
        topPlayers: getTopPlayers(state),
        addPlayer,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

const usePlayers = () => {
  const context = useContext(PlayersContext);

  if (context === undefined) {
    throw new Error("usePlayers must be used within a PlayersContext");
  }

  return context;
};

export { PlayersContext, PlayersProvider, usePlayers };
