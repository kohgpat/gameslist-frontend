import { useQuery } from "react-query";
import { getGame } from "../../api/games";

export const useGame = (id) => {
  return useQuery(["game", id], getGame, { manual: true });
};
