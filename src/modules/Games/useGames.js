import { useQuery } from "react-query";
import { getGames } from "../../api/games";

export const useGames = () => {
  return useQuery("games", getGames);
};
