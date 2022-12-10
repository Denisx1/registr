import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import LowerButton from "./Button/lowerBtn";
import Input from "./Input";
import "./index.css";
import { Context } from "../../index";
import { changeCondition, changetwoCondition } from "../helper";

const Form = ({
  headerBtnTitle,
  inputTitle,
  activeCondition,
  handlerCondition,
  lowerBtnClick,
}: {
  headerBtnTitle: string[];
  inputTitle: any;
  activeCondition: any;
  handlerCondition: any;
  lowerBtnClick: string[];
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  });
  const onHandleClick = (action: any) => {
    console.log(action);
  };
  const store = useContext(Context);
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
              <>
                <span className="spn">{input}</span>
                <Input
                  key={index}
                  inputName={input}
                  type={input}
                  placeholder={input}
                  active={active}
                />
              </>
            );
          })}
      </div>
      <div className="form-lowerClickBtn">
        <LowerButton
          title={active}
          active={activeCondition}
          onHandleClick={onHandleClick}
        />
      </div>
      <hr className="low-line" />
      {active == "login" ? <a>Forgot Password?</a> : ""}
    </div>
  );
};
Form.defaultProps = {
  headerBtnTitle: [],
};
export default Form;
