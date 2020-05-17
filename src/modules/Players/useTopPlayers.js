import { usePlayers as usePlayersContextHook } from "../../contexts/Players";

export const useTopPlayers = () => {
  const { topPlayers } = usePlayersContextHook();

  return {
    topPlayers,
    isLoading: false,
    error: false,
  };
};
