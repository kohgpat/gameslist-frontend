import React from "react";
import Input from "../Input";
import Button from "../Button";
import s from "./index.module.css";

const PlayersSearchForm = ({ inputRef, onSubmit }) => {
  return (
    <form className={s.form} autoComplete="off" onSubmit={onSubmit}>
      <Input
        id="players-search"
        placeholder="Search player by name"
        ref={inputRef}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default PlayersSearchForm;
