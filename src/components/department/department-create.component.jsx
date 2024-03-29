import React, { Component } from "react";
import { connect } from "react-redux";
import SubmitButton from "../submit-button/submit-button.component";
import { createDepartment } from "../../redux/department/department.actions";

class DepartmentCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departmentDetails: {
        departmentName: "",
        description: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { createDepartmentDispatch } = this.props;
    const { departmentDetails } = this.state;

    createDepartmentDispatch(departmentDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    let item = { ...this.state.departmentDetails };
    item[name] = value;
    this.setState({ departmentDetails: item });
  };

  render() {
    const { departmentDetails } = this.state;

    return (
      <div className="tab-pane" id="Staff-add">
        <div className="row clearfix">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Department DETAILS</h3>
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
              <form name="form" onSubmit={this.handelSubmit}>
                <div className="row clearfix">
                  <div className="col-md-4 col-sm-12">
                    <div className="form-group"></div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group">
                      <label>Department Name</label>
                      <input
                        type="text"
                        name="departmentName"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={departmentDetails.departmentName}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group"></div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group mt-3">
                      <label>Description</label>
                      <textarea
                        name="description"
                        onChange={this.changeHandler}
                        value={departmentDetails.description}
                        rows="4"
                        className="form-control no-resize"
                        placeholder="Please type what you want..."
                      ></textarea>
                    </div>
                  </div>

                  <SubmitButton buttonName={`Add Department`} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createDepartmentDispatch: (newDepartment) =>
    dispatch(createDepartment(newDepartment)),
});

export default connect(null, mapDispatchToProps)(DepartmentCreate);
