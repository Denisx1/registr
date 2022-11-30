import React, { useState } from "react";
import Button from './Button'
import "./index.css";


const ActionButton = ({ actionBtnTitle }:{actionBtnTitle:any}) => {
  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div className="action-btn">
        <Button title='login' active={signUp} onHandleClick={()=>{setSignUp(true); setLogin(false)}}/>
        <Button title='signup'  active={login} onHandleClick={()=>{setSignUp(false); setLogin(true)}}/>
    </div>
  );
};

export default ActionButton;

