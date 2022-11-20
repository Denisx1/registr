import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Form } from './login';
import { FormR } from './register';
import "./index.css";


const LoginForm: FC = () => {

  const [conditionForm, setConditionForm] = useState(false);

  return (
    <div className="container">
      <div className="slider"></div>
      <div className="btn">
        <button className="signup">Signup</button>
        <button className="login" onClick={()=>setConditionForm(true)}>Login</button>
      </div>
      <div className="formSection">
        <Form submitTitle={conditionForm ? 'Login' : 'Singup'}/>
        <FormR submitTitle={conditionForm ? 'Login' : 'Singup'}/>
      </div>
    </div>
  );
};

export default observer(LoginForm);