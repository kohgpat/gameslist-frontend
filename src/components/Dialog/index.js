import React from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import s from "./index.module.css";

const Dialog = ({ isVisible, onDismiss, initialFocusRef, label, children }) => {
  return (
    <DialogOverlay
      isOpen={isVisible}
      onDismiss={onDismiss}
      initialFocusRef={initialFocusRef}
    >
      <DialogContent className={s.dialogContent} aria-label={label}>
        {children}
      </DialogContent>
    </DialogOverlay>
  );
};

export default Dialog;
