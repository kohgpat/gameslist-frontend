import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFlashMessage } from "../../modules/FlashMessage/useFlashMessage";
import Page from "../../pages/NewGame";
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  Link: () => <div />,
}));
jest.mock("axios");
jest.mock("../../modules/FlashMessage/useFlashMessage");

describe("NewGame", () => {
  test("shows validation dialog if players are not selected", async () => {
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

    render(<Page />);

    userEvent.click(screen.getByRole("button", { name: /submit game/i }));

    await waitFor(() =>
      expect(screen.getByText(/validation dialog/i)).toBeInTheDocument()
    );

    expect(
      screen.getByText(/You have forgot to add players to the game/i)
    ).toBeInTheDocument();
  });

  test("shows validation dialog if a winner is not selected", async () => {
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

    render(<Page />);

    const openSelectDialogIconButton = await screen.findByRole("button", {
      name: /Open players select dialog/i,
    });
    userEvent.click(openSelectDialogIconButton);
    expect(screen.getByText(/select a player/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /Alice/i }));
    userEvent.click(screen.getByRole("button", { name: /Done/i }));

    expect(screen.getByText(/No winner selected/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /submit game/i }));

    await waitFor(() =>
      expect(screen.getByText(/validation dialog/i)).toBeInTheDocument()
    );

    expect(
      screen.queryByText(/You have forgot to add players to the game/i)
    ).not.toBeInTheDocument();

    expect(
      screen.getByText(/You have forgot to select a winner/i)
    ).toBeInTheDocument();
  });

  test.skip("successfully create new game", async () => {
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

    // const history = createMemoryHistory();

    render(
      // <Router history={history}>
      <Page />
      // </Router>
    );

    const submitButton = await screen.findByRole("button", {
      name: /submit game/i,
    });

    expect(
      screen.getByText(/No players selected. Please add up to 4 players./i)
    ).toBeInTheDocument();

    userEvent.click(submitButton);

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
    userEvent.click(closeValidationDialogButton);
    expect(screen.queryByText(/validation dialog/i)).not.toBeInTheDocument();

    // select player
    const openSelectDialogIconButton = await screen.findByRole("button", {
      name: /Open players select dialog/i,
    });
    userEvent.click(openSelectDialogIconButton);
    expect(screen.getByText(/select a player/i)).toBeInTheDocument();
    userEvent.click(screen.getByRole("button", { name: /Alice/i }));
    userEvent.click(screen.getByRole("button", { name: /Done/i }));

    expect(screen.getByText(/No winner selected/i)).toBeInTheDocument();

    // select a winner
    userEvent.click(screen.getByRole("button", { name: /Alice/i }));

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

    userEvent.click(submitButton);

    console.log({ location: window.location.href });

    // expect(screen.getByText(/Games/i)).toBeInTheDocument();
  });
});
