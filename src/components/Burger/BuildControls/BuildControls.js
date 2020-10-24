import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctl, i) => {
        return (
          <BuildControl
            key={i}
            label={ctl.label}
            added={() => props.ingredientAdded(ctl.type)}
            removed={() => props.ingredientRemoved(ctl.type)}
            disabled={props.disabledInfo[ctl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        onClick={props.ordered}
        disabled={!props.purchasable}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
