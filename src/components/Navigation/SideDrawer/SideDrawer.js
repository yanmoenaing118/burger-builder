import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "./../../Logo/Logo";

import Backdrop from "./../../UI/Backdrop/Backdrop";
import Aux from "./../../../hoc/Aux";
import classes from "./SideDrawer.module.css";

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Hide];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
