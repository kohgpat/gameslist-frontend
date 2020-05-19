import { useQuery } from "react-query";
import { getTopPlayers } from "../../api/players";

export const useTopPlayers = () => {
  return useQuery("top-players", getTopPlayers);
};
