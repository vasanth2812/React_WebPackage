import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm/LoginForm";
import { login } from "../../actions/actions";

class LoginPage extends React.Component {
  submit = data => {
    return this.props.login(data).then(() => {
      return this.props.history.push(`/`);
    });
  };
  render() {
    return (
      <div className="container">
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  role: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  submit: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    role: state.user.role
  };
}

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);
