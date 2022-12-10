import React from "react";
import "./index.css";

const LowerButton = ({
  title,
  active,
  onHandleClick,
}: {
  title: string;
  active: boolean;
  onHandleClick: any;
}) => (
  <button
    className={active ? "active_lowerBtn" + " lower-btn-container" : " lower-btn-container"}
    onSubmit={onHandleClick}
    type = 'submit'
  >
    {title}
  </button>
);

export default LowerButton;
