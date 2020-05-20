import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const HelpMessage = ({ className, message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={cn(s.helpMessage, className)}>
      <span className={s.helpMessageText}>{message}</span>
    </div>
  );
};

export default HelpMessage;
