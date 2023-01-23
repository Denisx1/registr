import React, { useContext, useState } from "react";
import { IUser } from "../../../../models/user";
import UserService from "../../../../services/userService";
import Paragraphs from "./paragraphs";
import Button from "./button";
import { Context } from "../../../../index";
import "./index.css";

const Page = ({
  navbarTitle,
  navbarButtonClick,
}: {
  navbarTitle: string[];
  navbarButtonClick: string[];
}) => {
  
  const { store } = useContext(Context);
  return (
    <>
      <div className="logo"></div>
      <div className="navbarLeft">
        {navbarTitle.length > 0 && (
          <div className="navbarTitle">
            {navbarTitle.map((title) => (
              <Paragraphs title={title} />
            ))}
          </div>
        )}
      </div>
      <div className="button">
        {navbarButtonClick.length > 1 && (
          <div className="button1">
            {navbarButtonClick.map((title) => (
              <Button
                title={title}
                onHandleClick={() => {
                  return title == "Logout" ? store.logout() : '';
                }}
              />
            ))}
            
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
