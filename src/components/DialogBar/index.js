import React from "react";
import { FiXCircle } from "react-icons/fi";
import Button from "../Button";
import IconButton from "../IconButton";
import s from "./index.module.css";

const DialogBar = ({ title, onDismiss, withDoneCondition }) => {
  return (
    <div className={s.dialogBar}>
      <label className={s.dialogBarTitle}>{title}</label>

      {withDoneCondition && (
        <Button type="button" small onClick={onDismiss} title="Done">
          Done
        </Button>
      )}

      {!withDoneCondition && (
        <IconButton type="button" big onClick={onDismiss} title="Close">
          <FiXCircle />
        </IconButton>
      )}
    </div>
  );
};

export default DialogBar;
