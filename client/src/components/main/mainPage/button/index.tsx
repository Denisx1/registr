import React from "react";


const Button = ({
  title,
  active,
  onHandleClick,
}: {
  title: string;
  active: boolean;
  onHandleClick: () => void;
}) => (
  <div
    className={active ? "active-btn" + " container__btn" : "container__btn"}
    onClick={onHandleClick}
  >
    {title}
  </div>
);

export default Button;
