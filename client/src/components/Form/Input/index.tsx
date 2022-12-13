import React, { useState, useEffect } from "react";
import { cls } from "../../helpers/helpersComp";

import "./index.css";

const Input = ({
  placeholder,
  inputName,
  styles,
  active,
  type,
  setInputCondition,
  inputCondition,
}: {
  placeholder: any;
  inputName: any;
  styles: any;
  active: any;
  type: string;
  setInputCondition: any;
  inputCondition: any;
}) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [active]);

  return (
    <input
      placeholder={placeholder}
      value={value}
      type={placeholder == "password" ? "password" : placeholder}
      className={cls(...styles, "form-input")}
      onChange={(e) => {
        setValue(e.target.value);
        setInputCondition({ ...inputCondition, [placeholder]: e.target.value });
      }}
    />
  );
};

Input.defaultProps = {
  placeholder: "",
  styles: "",
};

export default Input;
