import React, { useState, useRef } from "react";
import cn from "classnames";
import { FiPlusCircle } from "react-icons/fi";
import Dialog from "../Dialog";
import DialogBar from "../DialogBar";
import AddPlayerDialog from "../AddPlayerDialog";
import IconButton from "../IconButton";
import Input from "../Input";
import s from "./index.module.css";

const SelectPlayerDialog = ({
  isVisible,
  onDismiss,
  players,
  playersInGame,
  onSelect
}) => {
  const [input, setInput] = useState("");
  const [addPlayerDialogVisible, setAddPlayerDialogVisible] = useState(false);
  const inputRef = useRef();

  const onPlayerSelect = player => {
    onSelect(player);
    setInput("");
  };

  return (
    <>
      <Dialog
        isVisible={isVisible}
        onDismiss={onDismiss}
        label="Select players for the game"
        initialFocusRef={inputRef}
      >
        <DialogBar
          title="Select a player"
          onDismiss={onDismiss}
          withDoneCondition={!!playersInGame.length}
        />

        <div className={s.inputWrapper}>
          <Input
            placeholder="Search by player name"
            value={input}
            onChange={e => setInput(e.target.value)}
            ref={inputRef}
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
              player =>
                !input ||
                player.name.toLowerCase().includes(input.toLowerCase())
            )
            .map(player => (
              <li key={player.id} className={s.listItem}>
                <button
                  type="button"
                  className={cn(
                    s.listItemPlayer,
                    playersInGame.includes(player) && s.listItemPlayerSelected
                  )}
                  onClick={() => onPlayerSelect(player)}
                >
                  {player.name}
                </button>
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
  playersInGame: []
};

export default SelectPlayerDialog;
