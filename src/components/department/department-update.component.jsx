import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Spinner from "../with-spinner/with-spinner.component";

import SubmitButton from "../submit-button/submit-button.component";
import {
  selectDepartmentsIsLoading,
  selectDepartmentToUpdate,
  selectDepartmentUpdateErrorMessage,
  selectDepartmentUpdateSuccessMessage,
  selectDepartmentByIdErrorMessage,
} from "../../redux/department/department.selectors";
import {
  fetchDepartmentByDepartmentIdUpdateStart,
  updateDepartment,
} from "../../redux/department/department.actions";

class DepartmentUpdate extends React.Component {
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
    const { updateDepartmentDispatch, history } = this.props;
    const { departmentDetails } = this.state;
    updateDepartmentDispatch(departmentDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.departmentDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ departmentDetails: item });
  };

  componentDidMount() {
    console.log(`${this.props.match.params.departmentId}`);
    alert("componentDidMount");

    const { fetchDepartmentByIdDispatch, departmentToUpdate } = this.props;
    const subjcetId = this.props.match.params.departmentId;
    fetchDepartmentByIdDispatch(subjcetId);
    console.log("departmentToUpdate", departmentToUpdate);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    alert("componentWillReceiveProps");
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const departmentToUpdateData = nextProps.departmentToUpdate;
    console.log("departmentToUpdateData", departmentToUpdateData);

    alert("stop");
    this.setState({ departmentDetails: departmentToUpdateData });
  }

  reloadThePage(history) {
    history.push("/department");
  }

  onErrorRedirect(history) {
    history.push("/department");
  }

  render() {
    let isErrorMessage = false;
    const { departmentDetails } = this.state;
    const { selectDepartmentUpdateError, history, isLoading } = this.props;
    if (selectDepartmentUpdateError) {
      isErrorMessage = true;
    }

    const UpdateDepartmentSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Department is updated SuccessFully!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateDepartmentFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Failed To update department, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@CHILD-CONNECT.com
        </a>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    return (
      <div>
        {isErrorMessage ? (
          //this.onErrorRedirect(history)
          UpdateDepartmentFailedFlashMessage
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div className="tab-pane" id="Staff-add">
            <div className="row clearfix">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Update Department Details</h3>
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

                      <SubmitButton buttonName={`Update Department`} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectDepartmentsIsLoading,
  departmentToUpdate: selectDepartmentToUpdate,
  selectDepartmentUpdateError: selectDepartmentUpdateErrorMessage,
  selectDepartmentUpdateSuccess: selectDepartmentUpdateSuccessMessage,
  selectDepartmentByIdError: selectDepartmentByIdErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDepartmentByIdDispatch: (departmentId) =>
    dispatch(fetchDepartmentByDepartmentIdUpdateStart(departmentId)),
  updateDepartmentDispatch: (departmentToUpdate) =>
    dispatch(updateDepartment(departmentToUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentUpdate);
