import React, { createContext, useContext, useReducer } from "react";
import { players } from "../../constants";

const GamesContext = createContext();

GamesContext.displayName = "GamesContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GAME": {
      return {
        ...state,
        games: [...state.games, action.game],
      };
    }
    default: {
      throw new Error("Unexpected action passed to useCart reducer");
    }
  }
};

let id = 1;

const generateGames = () => {
  const games = [];

  for (let i = 0; i < 10; i++) {
    const game = {
      players,
      id: id++,
      winner: 1,
    };

    games.push(game);
  }

  return games;
};

const games = generateGames();

const GamesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    games: games || [],
  });

  const addGame = (game) => {
    dispatch({ type: "ADD_GAME", game });
  };

  const getGames = (state) => {
    return state.games;
  };

  return (
    <GamesContext.Provider value={{ games: getGames(state), addGame }}>
      {children}
    </GamesContext.Provider>
  );
};

const useGames = () => {
  const context = useContext(GamesContext);

  if (context === undefined) {
    throw new Error("useGames must be used within a GamesContext");
  }

  return context;
};

export { GamesContext, GamesProvider, useGames };
