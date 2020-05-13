import React from "react";
import { FiXCircle } from "react-icons/fi";
import IconButton from "../IconButton";
import s from "./index.module.css";

const DialogBar = ({ title, onDismiss }) => {
  return (
    <div className={s.dialogBar}>
      <label className={s.dialogBarTitle}>{title}</label>

      <IconButton type="button" big onClick={onDismiss}>
        <FiXCircle />
      </IconButton>
    </div>
  );
};

export default DialogBar;
