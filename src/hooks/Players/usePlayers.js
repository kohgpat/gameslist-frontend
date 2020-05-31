import { useQuery } from "react-query";
import { getPlayers } from "../../api/players";

export const usePlayers = (params) => {
  return useQuery(["players", params], getPlayers, { manual: true });
};
