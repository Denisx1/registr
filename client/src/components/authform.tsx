import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { Form } from "./form";
import { FormR } from './register'

const LoginForm: FC = () => {
    let signup = document.querySelector(".signup");
    let login = document.querySelector(".login");
    let slider = document.querySelector(".slider");
    let formSection = document.querySelector(".form-section");
    
    const [conditionForm, setConditionForm] = useState(false);
    const {store} = useContext(Context);

    return (
        <div className="container">
        <div className="slider"></div>
        <div className="btn">
          <button className='login' onClick={() => 
            setConditionForm(true)}>
            login
          </button>
          <button className='signup' onClick={() =>
            
            setConditionForm(false)}>
            signup
          </button>
        </div>
        <div className="formSection">
          
          <Form submitTitle={conditionForm ? "login" : 'signup'} />
          <FormR submitTitle={!conditionForm ? "signup" : 'login'} />
          
        </div>
      </div>
    );
};

export default observer(LoginForm);