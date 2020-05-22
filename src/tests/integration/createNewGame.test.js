import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import axios from "axios";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { useFlashMessage } from "../../modules/FlashMessage/useFlashMessage";
import App from "../../App";
jest.mock("axios");
jest.mock("../../modules/FlashMessage/useFlashMessage");

describe("NewGame", () => {
  it("successfully create new game", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: [{ id: 1, name: "Alice", stats: { wins: 0 } }],
      });
    });

    useFlashMessage.mockReturnValue({
      isVisible: false,
      variant: undefined,
      message: undefined,
      showMessage: jest.fn(),
      hideMessage: jest.fn(),
    });

    const history = createMemoryHistory();

    history.push("/new-game");

    render(
      <Router history={history}>
        <App />
      </Router>
    );

    const submitButton = await screen.findByRole("button", {
      name: /submit game/i,
    });

    expect(
      screen.getByText(/No players selected. Please add up to 4 players./i)
    ).toBeInTheDocument();

    fireEvent.click(submitButton);

    // Check validation
    expect(screen.getByText(/validation dialog/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You have forgot to add players to the game/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/You have forgot to select a winner/i)
    ).toBeInTheDocument();

    // close validation dialog
    const closeValidationDialogButton = await screen.findByRole("button");
    fireEvent.click(closeValidationDialogButton);
    expect(screen.queryByText(/validation dialog/i)).not.toBeInTheDocument();

    // select player
    const openSelectDialogIconButton = await screen.findByRole("button", {
      name: /Open players select dialog/i,
    });
    fireEvent.click(openSelectDialogIconButton);
    expect(screen.getByText(/select a player/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Alice/i }));
    fireEvent.click(screen.getByRole("button", { name: /Done/i }));

    expect(screen.getByText(/No winner selected/i)).toBeInTheDocument();

    // select a winner
    fireEvent.click(screen.getByRole("button", { name: /Alice/i }));

    // submit the game
    axios.post.mockImplementationOnce(() => {
      return Promise.resolve({
        data: {
          id: 1,
          players: [{ id: 1, name: "Alice", stats: { wins: 0 } }],
          winner: { id: 1, name: "Alice", stats: { wins: 0 } },
        },
      });
    });

    fireEvent.click(submitButton);

    await waitForElementToBeRemoved(() => screen.getByText(/New Game/i));

    // expect(screen.getByText(/Games/i)).toBeInTheDocument();
  });
});
