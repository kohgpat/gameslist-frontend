import { useQuery } from "react-query";
import { getTopPlayers } from "../../api/players";

export const useTopPlayers = (query) => {
  return useQuery(["top-players", query], getTopPlayers, { manual: true });
};
