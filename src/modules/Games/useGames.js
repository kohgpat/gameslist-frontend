import { useQuery } from "react-query";
import { getGames } from "../../api/games";

export const useGames = (params) => {
  return useQuery(["games", params], getGames, { manual: true });
};
