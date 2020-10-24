import React from "react";
import burgerLogo from "../../assets/Images/logo.png";
import classes from "./Logo.module.css";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My Burger Logo" />
  </div>
);
export default Logo;
