import React from "react";
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation";
import { Button, Label, Alert } from "reactstrap";
import PropTypes from "prop-types";
import "./LoginForm.scss";

class LoginForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {},
    loading: false
  };
  onChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  handleValidSubmit = () => {
    this.setState({ loading: true });
    this.props.submit(this.state.data).catch(err => {
      this.setState({ errors: err.response.data.errors, loading: false });
    });
  };
  handleInvalidSubmit = () => {
    console.log("invalid submit");
  };
  render() {
    const { data, errors, loading } = this.state;
    return (
      <div className="center login-form-parent mg-20">
        <AvForm
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
          ref={el => (this.myFormRef = el)}
        >
          <AvGroup>
            <div>
              {!!errors.global ? (
                <Alert color="danger">{errors.global}</Alert>
              ) : null}

              {!!errors.email ? (
                <Alert color="danger">{errors.email}</Alert>
              ) : null}
            </div>
            <Label for="Email">Email</Label>
            <span className="required-label">*</span>
            <AvField
              name="email"
              id="Email"
              type="email"
              value={data.email}
              onChange={this.onChange}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter a Email"
                },
                pattern: {
                  value:
                    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
                  errorMessage: "Please enter valid Email"
                }
              }}
            />
          </AvGroup>
          <AvGroup>
            <Label for="password">Password</Label>
            <span className="required-label">*</span>
            <AvField
              name="password"
              type="password"
              id="password"
              value={data.password}
              onChange={this.onChange}
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter a password"
                },
                minLength: {
                  value: 6,
                  errorMessage:
                    "Your password must be between 6 and 16 characters"
                },
                maxLength: {
                  value: 16,
                  errorMessage:
                    "Your password must be between 6 and 16 characters"
                }
              }}
            />
          </AvGroup>
          <Button color="primary" disabled={loading} className="lgn-loader">
            Submit
            {/* {loading} */}
          </Button>
        </AvForm>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
