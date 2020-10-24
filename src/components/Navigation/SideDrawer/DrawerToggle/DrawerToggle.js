import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({ clicked }) => {
  return (
    <div
      className={[classes.DrawerToggle, classes.MobileOnly].join(" ")}
      onClick={clicked}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
