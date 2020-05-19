import { useMutation } from "react-query";
import { createGame } from "../../api/games";

export const useCreateNewGame = () => {
  return useMutation(createGame, {
    refetchQueries: ["games"],
  });
};
