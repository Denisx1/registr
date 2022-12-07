import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import "./index.css";
import { Context } from "../../index";
import { changeCondition, changetwoCondition } from "../helper";

const Form = ({
  headerBtnTitle,
  inputTitle,
  activeCondition,
  handlerCondition,
}: {
  headerBtnTitle: string[];
  inputTitle: any;
  activeCondition: any;
  handlerCondition: any;
}) => {
  const active: string = changetwoCondition(activeCondition) as string;
  return (
    <div className="container">
      {headerBtnTitle.length > 0 && (
        <div className="action-btn">
          {headerBtnTitle.map((title, index) => (
            <Button
              title={title}
              active={activeCondition[index][title]}
              onHandleClick={() => {
                changeCondition(activeCondition, title, handlerCondition);
              }}
            />
          ))}
        </div>
      )}
      <div className="form__input-container">
        {Object.values(inputTitle[active]) &&
          Object.values(inputTitle[active]).map((input: any, index: number) => {
            return (
                <><Input
                key={index}
                inputName={input}
                placeholder={input}
                active={active} />
                <span className="spn">{input}</span></>    
            );
          })}
      </div>
    </div>
  );
};
Form.defaultProps = {
  headerBtnTitle: [],
};
export default Form;
