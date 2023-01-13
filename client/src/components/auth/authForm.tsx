import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import Form from "../Form";
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
        inputTitle={{
          login: ["Email", "Password"],
          signup: ["Email", "Password"],
        }}
        activeCondition={actionBtn}
        handlerCondition={setActionBtn}
        lowerBtnClick={["login", "signup"]}
      />
    </div>
  );
};

export default observer(LoginForm);
