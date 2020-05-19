import { useMutation, queryCache } from "react-query";
import { createGame } from "../../api/games";
import { useFlashMessage } from "../../modules/FlashMessage/useFlashMessage";

export const useCreateNewGame = () => {
  const { showMessage } = useFlashMessage();

  return useMutation(createGame, {
    onError: (err) => {
      showMessage({
        message:
          "The error occuried while submitting the game. Please try again later.",
        variant: "failure",
      });
    },
    onSuccess: () => {
      showMessage({
        message: "The game was successfully saved",
        variant: "success",
      });
    },
    onSettled: () => {
      queryCache.refetchQueries(["games"]);
    },
    // refetchQueries: ["games"],
  });
};
