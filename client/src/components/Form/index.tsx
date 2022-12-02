import React, { useState } from "react";
import Button from './Button'
import "./index.css";
import { changeCondition } from '../helper'
import { changetwoCondition} from '../helper2'

const Form = ({ headerBtnTitle, activeCondition, handlerCondition }:{headerBtnTitle:[string, string], activeCondition:any, handlerCondition:any}) => {
  console.log(activeCondition)
  const [active, setActive] = useState(changetwoCondition(activeCondition, handlerCondition))
  console.log(active)
  return (
    <div className="action-btn">
      {headerBtnTitle.map((title, index)=>(
        <Button 
          title={title}
          active={activeCondition[index][title]}
          onHandleClick={()=>{
            
            changeCondition(activeCondition, title, handlerCondition)}
          }
          />
      ))}   
    </div>
  );
};

export default Form;

