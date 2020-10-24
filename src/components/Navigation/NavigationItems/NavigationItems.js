import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/builder">Burger Builder</NavigationItem>
      <NavigationItem link="/checkout">Check Out</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
