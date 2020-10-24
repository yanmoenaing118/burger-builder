import React, { useEffect } from "react";

import Aux from "./../../../hoc/Aux";
import Backdrop from "./../Backdrop/Backdrop";
import classes from "./Modal.module.css";

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    console.log("Updated");
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0,
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default React.memo(Modal);
