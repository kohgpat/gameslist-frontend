import { useQuery } from "react-query";
import { getPlayer } from "../../api/players";

export const usePlayer = (id) => {
  return useQuery(["player", id], getPlayer, { manual: true });
};
