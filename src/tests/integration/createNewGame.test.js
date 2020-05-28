import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { useFlashMessage } from "../../modules/FlashMessage/useFlashMessage";
import { useCreateNewGame } from "../../modules/NewGame/useCreateNewGame";
import Page from "../../pages/NewGame";

jest.mock("axios");
jest.mock("../../modules/FlashMessage/useFlashMessage");
jest.mock("../../modules/NewGame/useCreateNewGame");

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

    useCreateNewGame.mockReturnValue([jest.fn()]);

    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/No players selected. Please add up to 4 players./i)
    ).toBeInTheDocument();

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

    useCreateNewGame.mockReturnValue([jest.fn()]);

    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    );

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

  test("it should keep selected players after new player dialog was displayed", async () => {
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

    useCreateNewGame.mockReturnValue([jest.fn()]);

    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText(/New Game/i)).toBeInTheDocument()
    );

    userEvent.click(
      screen.getByRole("button", { name: /Open players select dialog/i })
    );
    expect(screen.getByText(/Select a player/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /Alice/i }));

    userEvent.click(
      screen.getByRole("button", { name: /Add new player to the list/i })
    );

    await waitFor(() =>
      expect(
        screen.getByPlaceholderText(/Enter player name/i)
      ).toBeInTheDocument()
    );

    axios.post.mockImplementationOnce(() => {
      return Promise.resolve({
        data: { id: 2, name: "Bob", stats: { wins: 0 } },
      });
    });

    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({
        data: [
          { id: 1, name: "Alice", stats: { wins: 0 } },
          { id: 2, name: "Bob", stats: { wins: 0 } },
        ],
      });
    });

    userEvent.type(screen.getByPlaceholderText(/Enter player name/i), "Bob");
    userEvent.click(screen.getByRole("button", { name: /Add new player/i }));

    await waitFor(() =>
      expect(screen.queryByText(/Add new player/)).not.toBeInTheDocument()
    );

    expect(screen.getByRole("button", { name: /Done/i })).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /Alice/i }));

    expect(
      screen.queryByRole("button", { name: /Done/i })
    ).not.toBeInTheDocument();
  });

  test("successfully create new game", async () => {
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

    const createNewGameMock = jest.fn();
    useCreateNewGame.mockReturnValue([createNewGameMock]);

    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    );

    const submitButton = await screen.findByRole("button", {
      name: /submit game/i,
    });

    expect(
      screen.getByText(/No players selected. Please add up to 4 players./i)
    ).toBeInTheDocument();

    // select a player
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

    expect(screen.queryByText(/No winner selected/i)).not.toBeInTheDocument();

    // submit the game
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(createNewGameMock).toBeCalledWith({
        players: [{ id: 1, name: "Alice", stats: { wins: 0 } }],
        winner: { id: 1, name: "Alice", stats: { wins: 0 } },
      });
    });
  });
});
