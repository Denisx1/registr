import React from "react";
import "./index.css";


const Button = ({ title, active, onHandleClick }:{title:any, active:boolean, onHandleClick:any}) => (
  <div
    className={active ? "active-btn" + " container__btn" : "container__btn"}
    onClick={onHandleClick}
  >
    {title}
  </div>
);

export default Button;

