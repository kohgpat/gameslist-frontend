import makeStore from "../makeStore";

const flashMessageReducer = (state, action) => {
  switch (action.type) {
    case "SHOW": {
      return {
        ...state,
        isVisible: true,
        variant: action.variant,
        message: action.message,
      };
    }
    case "HIDE": {
      return {
        ...state,
        isVisible: false,
        variant: undefined,
        message: undefined,
      };
    }
    default: {
      throw new Error("Unexpected action: " + action);
    }
  }
};

const [
  FlashMessageProvider,
  useFlashMessage,
  useFlashMessageDispatch,
] = makeStore(flashMessageReducer, {
  isVisible: false,
  variant: undefined,
  message: undefined,
});

export { FlashMessageProvider, useFlashMessage, useFlashMessageDispatch };
