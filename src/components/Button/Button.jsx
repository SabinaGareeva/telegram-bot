import React from "react";
import css from "./Button.module.css";
const Button = (props) => {
  return <button {...props} className={css.button}></button>;
};
export default Button;
