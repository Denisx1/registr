import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import LowerButton from "./Button/lowerBtn";
import Input from "./Input";
import "./index.css";
import { Context } from "../../index";
import { changeCondition, changetwoCondition } from "../helpers/helper";

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
  const active: string = changetwoCondition(activeCondition) as string;
  const { store } = useContext(Context);
  const [inputCondition, setInputCondition] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  });
  const onHandlerSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = Object.values(inputCondition);
    active === "login"
      ? store.login(inputValue[0], inputValue[1])
      : store.registration(inputValue[0], inputValue[1]);
  };
  return (
    <form className="container" onSubmit={onHandlerSubmit}>
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
                <Input
                  key={index}
                  inputName={input}
                  type={input}
                  placeholder={input}
                  active={active}
                  setInputCondition={setInputCondition}
                  inputCondition={inputCondition}
                />
                <span className="spn">{input}</span>
              </>
            );
          })}
      </div>
      <div className="form-lowerClickBtn">
        <LowerButton title={active} active={activeCondition} />
      </div>
      <hr className="low-line" />
      {active == "login" ? <p>Forgot Password?</p> : ""}
    </form>
  );
};
Form.defaultProps = {
  headerBtnTitle: [],
};
export default Form;
