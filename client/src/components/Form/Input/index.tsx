import { stringify } from "node:querystring";
import { json } from "node:stream/consumers";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../index";
import { cls } from "../../helpersComp";

import "./index.css";

const Input = ({
  placeholder,
  inputName,
  styles,
  active,
  type,
}: {
  placeholder: any;
  inputName: any;
  styles: any;
  active: any;
  type: string;
}) => {
  const { store } = useContext(Context);
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue("");
  }, [active]);
  console.log(inputName, value);
  return (
    <><>
      <input
        placeholder={placeholder}
        value={value}
        type={placeholder == "password" ? "password" : placeholder}
        className={cls(...styles, "form-input")}
        onChange={(e) => setValue(e.target.value)} />
    </><button className="clkbtn">Login</button></>
  );
};

Input.defaultProps = {
  placeholder: "",
  styles: "",
};

export default Input;
