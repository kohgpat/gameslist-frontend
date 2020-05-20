import React, { useState, useRef } from "react";
import { useAddPlayer } from "../../modules/Players/useAddPlayer";
import Dialog from "../Dialog";
import DialogBar from "../DialogBar";
import Input from "../Input";
import Button from "../Button";
import s from "./index.module.css";

const AddPlayerDialog = ({ isVisible, onDismiss }) => {
  const [name, setName] = useState("");
  const [addPlayer] = useAddPlayer();
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name.length) {
      return;
    }

    addPlayer({
      name,
    });

    setName("");
    onDismiss();
  };

  return (
    <Dialog
      isVisible={isVisible}
      onDismiss={onDismiss}
      label="Add new player"
      initialFocusRef={inputRef}
    >
      <DialogBar title="Add new player" onDismiss={onDismiss} />

      <div className={s.content}>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="Enter player name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef}
          />

          <Button
            className={s.submitButton}
            type="submit"
            disabled={!name.length}
          >
            Add new player
          </Button>
        </form>
      </div>
    </Dialog>
  );
};

export default AddPlayerDialog;
