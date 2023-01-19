import React from "react";
import Paragraphs from "./paragraphs";
import Button from './button'
import "./index.css";

const Page = ({
  navbarTitle,
  navbarButtonClick,
}: {
  navbarTitle: string[];
  navbarButtonClick: string[];
}) => {
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
        {navbarButtonClick.length>1&&(
          <div className="button1">
            {navbarButtonClick.map((title)=>(
              <Button 
              title={title}
              onHandleClick={()=>console.log('111')}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
