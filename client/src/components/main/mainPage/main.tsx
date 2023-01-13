import React, { useState, useEffect, useContext } from "react";
import Paragraphs from "./paragraphs";
import "./index.css";

const Page = ({
  navbarTitle,
  buttonClick,
}: {
  navbarTitle: string[];
  buttonClick: string[];
}) => {
  return (
    <div>
        {navbarTitle.length>0&&(
    <div className="navbarLeft">
      {navbarTitle.map((title) => (
        <Paragraphs title={title} />
      ))}
    </div>)}
    </div>
  );
};

export default Page;
