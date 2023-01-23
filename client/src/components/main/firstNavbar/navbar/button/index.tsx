import React from "react";
import "./index.css";

const Button = ({
  title,
  onHandleClick,
}: {
  title: string;
  onHandleClick: () => void;
}) => (
  <button className={"btn"} onClick={onHandleClick}>
    {title}
  </button>
);

export default Button;
