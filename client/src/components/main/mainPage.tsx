import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import Page from "./mainPage/main";
import "./index.css";

const MainPage: FC = () => {
  return (
    <div className="navbar">
      <Page
        navbarTitle={["login", "signup", "login", "signup"]}
        navbarButtonClick={["GetUser", "Logout"]}
      />
    </div>
  );
};

export default observer(MainPage);
