import React from "react";
import Dialog from "../Dialog";
import DialogBar from "../DialogBar";
import s from "./index.module.css";

const ValidationDialog = ({ isVisible, onDismiss, playersInGame, winner }) => {
  return (
    <Dialog
      isVisible={isVisible}
      onDismiss={onDismiss}
      label="Validation Dialog"
    >
      <DialogBar title="Validation dialog" onDismiss={onDismiss} />

      <div className={s.content}>
        <p>
          It's seems some little validation error occuried. Please take a look
          and fix the issue.
        </p>

        {!playersInGame.length && (
          <p className={s.validationError}>
            You have forgot to add players to the game. Please add player using
            Select Player Dialog (button with plus icon)
          </p>
        )}

        {!winner && (
          <p className={s.validationError}>
            You have forgot to select a winner. Please click on the player name
            to select as a winner.
          </p>
        )}
      </div>
    </Dialog>
  );
};

export default ValidationDialog;
