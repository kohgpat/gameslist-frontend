import {
  useFlashMessage as useFlashMessageContext,
  useFlashMessageDispatch as useFlashMessageDispatchContext,
} from "../../contexts/FlashMessage";

export const useFlashMessage = () => {
  const state = useFlashMessageContext();
  const dispatch = useFlashMessageDispatchContext();

  const showMessage = ({ message, variant }) => {
    dispatch({ type: "SHOW", message, variant });
  };

  const hideMessage = () => {
    dispatch({ type: "HIDE" });
  };

  return {
    isVisible: state.isVisible,
    message: state.message,
    variant: state.variant,
    showMessage,
    hideMessage,
  };
};
