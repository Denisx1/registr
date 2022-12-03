import React from "react";
import "./index.css";

const Input = ({
  active,
  onHandleClick,
}: {
  active: string;
  onHandleClick: () => void;
}) => (
  <div
    className={
      active
        ? "active-input" + " container__input"
        : "container__input"
    }
    onClick={onHandleClick}
  ></div>
);

export default Input;
