import React, { FC, useContext, useState } from "react";

import { observer } from "mobx-react-lite";
// import { Form1 } from "./form";
import { FormR } from "./register";
import { Form1 } from "./form1";
import Form from "./Form";
import "./index.css";

const LoginForm: FC = () => {
  const [actionBtn, setActionBtn] = useState([
    { login: true },
    { signup: false },
  ]);
  return (
    <div className="container">
      <Form
        headerBtnTitle={["login", "signup"]}
        input={{
          login: ["email", "password"],
          signup: ["email", "emailConfirm", "password", "confirmPassword"],
        }}
        activeCondition={actionBtn}
        handlerCondition={setActionBtn}
      />
    </div>
  );
};

export default observer(LoginForm);
