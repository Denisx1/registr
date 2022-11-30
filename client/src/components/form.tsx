import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import "./index.css";

export const Form = ({ submitTitle }: { submitTitle: string }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  return (
    <div className="login-box">
      <input
        className="email el"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <span className="emai">email</span>
      <input
        className="password el"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <span className="pass">password</span>
      <button onClick={() => store.login(email, password)} className="clkbtn">
        Login
      </button>
      <hr className="line" />
      <a href="#">forgot password?</a>
    </div>
  );
};
