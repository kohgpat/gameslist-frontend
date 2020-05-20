import React from "react";
import cn from "classnames";
import s from "./index.module.css";

const LoadingItem = ({ className }) => {
  return <div className={cn(s.loadingItem, className)} />;
};

export default LoadingItem;
