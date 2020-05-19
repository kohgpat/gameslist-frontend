import React from "react";
import cn from "classnames";
import { FiXCircle } from "react-icons/fi";
import IconButton from "../IconButton";
import s from "./index.module.css";

const FlashMessage = ({ variant, message, onClose }) => {
  return (
    <div
      className={cn({
        [s.flashMessage]: true,
        [s.flashMessageSuccess]: variant && variant === "success",
        [s.flashMessageFailure]: variant && variant === "failure",
      })}
    >
      <span className={s.message}>{message}</span>
      <IconButton className={s.closeButton} type="button" onClick={onClose}>
        <FiXCircle className={s.closeButtonIcon} />
      </IconButton>
    </div>
  );
};

export default FlashMessage;
