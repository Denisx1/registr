import React from "react";
import './index.css'


const Button = ({
  title,
  
  onHandleClick,
}: {
  title: string;
  
  onHandleClick: () => void;
}) => (
  <div
    className={"btn"}
    onClick={onHandleClick}
  >
    {title}
  </div>
);

export default Button;
