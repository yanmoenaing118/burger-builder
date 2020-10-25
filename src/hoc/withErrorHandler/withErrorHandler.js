import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use(
        (req) => {
          this.setState({ error: null });

          return req;
        },
        (err) => {
          this.setState({ error: err });

          return err;
        }
      );

      axios.interceptors.response.use(
        (res) => {
          return res;
        },
        (err) => {
          this.setState({ error: err });
          return err;
        }
      );
    }

    confirmErrorHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.confirmErrorHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
