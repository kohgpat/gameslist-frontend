import { useMutation, queryCache } from "react-query";
import { useHistory } from "react-router-dom";
import { createGame } from "../../api/games";
import { useFlashMessage } from "../../hooks/FlashMessage/useFlashMessage";

export const useCreateNewGame = () => {
  const { showMessage } = useFlashMessage();
  const history = useHistory();

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

      history.push("/games");
    },
    onSettled: () => {
      queryCache.refetchQueries(["games"]);
    },
  });
};
