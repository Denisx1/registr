import React, { FC, useContext, useState } from "react";
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import './index.css';

export const Form = ({ submitTitle }: {submitTitle: any}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  return (
    <div className="login-box">
        <input className="email ele" onChange={e => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email" />
        <span>email</span>
        <input className="password ele"
        onChange={e => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password" />
        <span>password</span>
        <button onClick={() => store.login(email, password)} className='clkbtn'>
        Login
        </button>
        <hr/>
        <a href="#">Forgot Password?</a>
    </div>
  );
};