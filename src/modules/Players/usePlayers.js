import { usePlayers as usePlayersContextHook } from "../../contexts/Players";

export const usePlayers = () => {
  const { players } = usePlayersContextHook();

  return {
    players,
    isLoading: false,
    error: false,
  };
};

export const useTopPlayers = () => {
  const { topPlayers } = usePlayersContextHook();

  return {
    topPlayers,
    isLoading: false,
    error: false,
  };
};
