import React, { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import "./index.css";
import { changeCondition, changetwoCondition } from "../helper";

const Form = ({
  headerBtnTitle,
  input,
  activeCondition,
  handlerCondition,
}: {
  headerBtnTitle: string[];
  input: any;
  activeCondition: any;
  handlerCondition: any;
}) => {
  const active: any = changetwoCondition(activeCondition);
  console.log(active)
  console.log(input[active]);
  return (
    <div>
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
          <Input
              active={active}
              onHandleClick={()=>{
                console.log('1111')
              }}/>
        </div>
      )}
    </div>
  );
};
Form.defaultProps = {
  headerBtnTitle: [],
};
export default Form;
