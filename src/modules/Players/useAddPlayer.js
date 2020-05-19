import { useMutation } from "react-query";
import { createPlayer } from "../../api/players";

export const useAddPlayer = () => {
  return useMutation(createPlayer, {
    refetchQueries: ["players"],
  });
};
