import React from "react";
import axios from "axios";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "admin1",
      password: "user123",
    };
  }

  componentDidMount() {
    const { email, password } = this.state;
    console.log(email, password);

    const session_url = `https://walkinchildconnect.cloudjiffy.net/ChildConnectAdminWeb/login/v1/userLogin`;

    return axios
      .post(session_url, {
        password: password,
        userName: email,
      })
      .then(function (response) {
        console.log("Authenticated", response.data);
        console.log("Authenticated", response.data.tokenType);
        console.log("Authenticated", response.data.accessToken);
      })
      .catch(function (error) {
        console.log("Error on Authentication");
      });
  }

  handelSubmit = (event) => {};
  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="auth option2">
        <div className="auth_left">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <a className="header-brand" href="index.html">
                  <i className="fa fa-graduation-cap brand-logo"></i>
                </a>
                <div className="card-title mt-3">Login to your account</div>
              </div>
              <form name="form" onSubmit={this.handelSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.changeHandler}
                    value={this.state.email}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <a
                      href="forgot-password.html"
                      className="float-right small"
                    >
                      I forgot password
                    </a>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.changeHandler}
                    value={this.state.password}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-label">Remember me</span>
                  </label>
                </div>
                <button className="btn btn-primary btn-block">Sign in</button>

                <div className="text-muted mt-4">
                  Don't have account yet? <a href="register.html">Sign up</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
