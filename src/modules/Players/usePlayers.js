import { useQuery } from "react-query";
import { getPlayers } from "../../api/players";

export const usePlayers = () => {
  return useQuery("players", getPlayers);
};
