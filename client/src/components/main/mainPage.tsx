import React, { FC } from "react";

import { observer } from "mobx-react-lite";
import Page from "./firstNavbar/navbar/navbar";
import FirstBlock from "./mainPage/firstBlock";
import Carousel from "./carousel/carousel";
import "./index.css";

const MainPage: FC = () => {
  return (
    <>
      <div className="navbar">
        <Page
          navbarTitle={["login", "signup", "login", "signup"]}
          navbarButtonClick={[" ", "Logout"]}
        />
      </div>
      <div className="main">
        <div className="item">
          <Carousel>
            <div className="item1"></div>
            <div className="item2"></div>
            <div className="item3"></div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default observer(MainPage);
