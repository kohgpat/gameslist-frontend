import { useGames as useGamesContextHook } from "../../contexts/Games";

export const useGames = () => {
  const { games } = useGamesContextHook();

  return {
    games,
    isLoading: false,
    error: false,
  };
};
