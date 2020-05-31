import { useMutation, queryCache } from "react-query";
import { createPlayer } from "../../api/players";

export const useAddPlayer = () => {
  return useMutation(createPlayer, {
    onSettled: () => {
      queryCache.refetchQueries(["players"]);
    },
  });
};
