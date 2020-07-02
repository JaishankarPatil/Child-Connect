import React, { Component } from "react";
import SubmitButton from "../../components/submit-button/submit-button.component";

class UserAccount extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">User Account</h3>
          <div className="card-options ">
            <a
              href="#"
              className="card-options-collapse"
              data-toggle="card-collapse"
            >
              <i className="fe fe-chevron-up"></i>
            </a>
            <a
              href="#"
              className="card-options-remove"
              data-toggle="card-remove"
            >
              <i className="fe fe-x"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="row clearfix">
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>Mobile</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>User Name</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="form-group">
                <label>Re-Confirm Password</label>
                <input type="text" className="form-control"></input>
              </div>
            </div>

            <SubmitButton buttonName={"Create Account"} />
          </div>
        </div>
      </div>
    );
  }
}

export default UserAccount;
