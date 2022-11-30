import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Form } from "./form";
import { FormR } from "./register";
import ActionButton from "./actionButton";

const LoginForm: FC = () => {
  const [conditionForm] = useState(false);
  const { store } = useContext(Context);
  return (
    <div className="container"> 
        <ActionButton actionBtnTitle={["login", "signup"]} />
      <div className="formSection">
        <Form submitTitle={conditionForm ? "login" : "signup"} />
        <FormR submitTitle={!conditionForm ? "signup" : "login"} />
      </div>
    </div>
  );
};

export default observer(LoginForm);
