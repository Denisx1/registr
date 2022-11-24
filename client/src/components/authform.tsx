import React, { FC, useContext, useState, Component } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Form } from "./form";
import { FormR } from "./register";
import "./index.css";

const LoginForm: FC = () => {
  const [conditionForm, setConditionForm] = useState(false);
  const { store } = useContext(Context);

  console.log(conditionForm)
  return (
    <div className="container">
      <div className="slider"></div>
      <div className="btn">
        <button className= { !conditionForm  ? 'signup' : 'signup'} onClick={() => setConditionForm(false)}>
          Signup
        </button>
        <button className={ conditionForm ?    'login' : 'login'} onClick={() => setConditionForm(true)}>
          Login
        </button>
      </div>
      <div className="formSection">
        <Form submitTitle={conditionForm ? "Login" : "SignUp"} onSubmit={conditionForm ? store.login: store.registration} />
      </div>
    </div>
  );
};

export default observer(LoginForm);