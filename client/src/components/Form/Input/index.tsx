import React, { useState, useEffect } from "react";
import { cls } from "../../helpersComp";

import "./index.css";

const Input = ({
  placeholder,
  inputName,
  styles,
  active,
}: {
  placeholder: any;
  inputName: any;
  styles: any;
  active: any;
}) => {

  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [active]);

  

  return (
    <input
      placeholder={placeholder}
      value={value}
      name={inputName}
      className={cls(...styles, "form-input")}
      onChange={(e)=> setValue(e.target.value)}
    />
  );
};

Input.defaultProps = {
  placeholder: "",
  styles: "",
};

export default Input;
