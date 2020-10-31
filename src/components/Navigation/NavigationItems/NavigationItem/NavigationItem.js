import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = ({ link, exact, active, children }) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={link}
      exact={exact}
      activeClassName={active ? classes.active : null}
    >
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;
