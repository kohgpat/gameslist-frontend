import { useQuery } from "react-query";
import { getPlayers } from "../../api/players";

export const usePlayers = (query) => {
  return useQuery(["players", query], getPlayers, { manual: true });
};
