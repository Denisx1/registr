import React, { FC, useContext, useState } from "react";

import { observer } from "mobx-react-lite";
// import { Form1 } from "./form";
import { FormR } from "./register";
import { Form1 } from "./form1";
import Form from "./Form";

const LoginForm: FC = () => {
  const [actionBtn, setActionBtn] = useState([
    { signup: false },
    { login: true },
  ]);

  return (
    <div className="container">
      <Form
        headerBtnTitle={["signup", "login"]}
        activeCondition={actionBtn}
        handlerCondition={setActionBtn}
      />
      <div className="formSection">
        <Form1 />
        <FormR />
      </div>
    </div>
  );
};

export default observer(LoginForm);
