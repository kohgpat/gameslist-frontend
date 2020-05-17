import { usePlayers as usePlayersContextHook } from "../../contexts/Players";

export const useAddPlayer = () => {
  const { addPlayer } = usePlayersContextHook();

  return {
    addPlayer,
    isLoading: false,
    error: false,
  };
};
