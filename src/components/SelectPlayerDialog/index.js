import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import Dialog from "../Dialog";
import DialogBar from "../DialogBar";
import AddPlayerDialog from "../AddPlayerDialog";
import IconButton from "../IconButton";
import Input from "../Input";
import PlayerShort from "../PlayerShort";
import s from "./index.module.css";

const SelectPlayerDialog = ({
  isVisible,
  onDismiss,
  players,
  playersInGame,
  onSelect,
}) => {
  const [input, setInput] = useState("");
  const [addPlayerDialogVisible, setAddPlayerDialogVisible] = useState(false);

  return (
    <>
      <Dialog
        isVisible={isVisible}
        onDismiss={onDismiss}
        label="Select players for the game"
      >
        <DialogBar title="Select a player" onDismiss={onDismiss} />

        <div className={s.inputWrapper}>
          <Input
            placeholder="Search by player name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            big
            title="Add new player to the list"
            type="button"
            onClick={() => setAddPlayerDialogVisible(true)}
          >
            <FiPlusCircle />
          </IconButton>
        </div>

        <ul className={s.list}>
          {players
            .filter(
              (player) =>
                !input ||
                player.name.toLowerCase().includes(input.toLowerCase())
            )
            .map((player, index) => (
              <li tabIndex="0" key={player.id}>
                <PlayerShort
                  player={player}
                  onClick={onSelect}
                  selected={playersInGame.includes(player)}
                />
              </li>
            ))}
        </ul>
      </Dialog>

      <AddPlayerDialog
        isVisible={addPlayerDialogVisible}
        onDismiss={() => setAddPlayerDialogVisible(false)}
      />
    </>
  );
};

SelectPlayerDialog.defaultProps = {
  players: [],
  playersInGame: [],
};

export default SelectPlayerDialog;
