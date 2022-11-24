import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import "./index.css";

export const Form = ({ submitTitle, onSubmit }: { submitTitle: any, onSubmit:(email: string, password: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  return (
    <div className="login-box">
      <input
        className="email ele"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <span>email</span>
      <input
        className="password ele"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <span>password</span>
      <button onClick={() => onSubmit(email, password)} className="clkbtn">
        {submitTitle}
      </button>
      <hr />
      {submitTitle = 'login' && <a href="#">Forgot Password?</a>}
    </div>
  );
};