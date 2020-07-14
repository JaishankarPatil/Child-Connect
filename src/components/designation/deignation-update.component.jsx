import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Spinner from "../with-spinner/with-spinner.component";

import SubmitButton from "../submit-button/submit-button.component";
import {
  selectDesignationsIsLoading,
  selectDesignationToUpdate,
  selectDesignationUpdateErrorMessage,
  selectDesignationUpdateSuccessMessage,
  selectDesignationByIdErrorMessage,
} from "../../redux/designation/designation.selectors";
import {
  fetchDesignationByDesignationIdUpdateStart,
  updateDesignation,
} from "../../redux/designation/designation.actions";

class DesignationUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designationDetails: {
        designationName: "",
        description: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { updateDesignationDispatch, history } = this.props;
    const { designationDetails } = this.state;
    updateDesignationDispatch(designationDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.designationDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ designationDetails: item });
  };

  componentDidMount() {
    console.log(`${this.props.match.params.designationId}`);
    alert("componentDidMount");

    const { fetchDesignationByIdDispatch, designationToUpdate } = this.props;
    const subjcetId = this.props.match.params.designationId;
    fetchDesignationByIdDispatch(subjcetId);
    console.log("designationToUpdate", designationToUpdate);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    alert("componentWillReceiveProps");
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const designationToUpdateData = nextProps.designationToUpdate;
    console.log("designationToUpdateData", designationToUpdateData);

    alert("stop");
    this.setState({ designationDetails: designationToUpdateData });
  }

  reloadThePage(history) {
    history.push("/designation");
  }

  onErrorRedirect(history) {
    history.push("/designation");
  }

  render() {
    let isError = false;
    let isSuccess = false;
    const { designationDetails } = this.state;
    const {
      designationUpdateError,
      history,
      isLoading,
      designationUpdateSuccess,
    } = this.props;
    if (designationUpdateError) {
      isError = true;
    }

    if (designationUpdateSuccess) {
      isSuccess = true;
    }

    const UpdateDesignationSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Designation is updated SuccessFully!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateDesignationFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Failed To update designation, please contact{" "}
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
        {isError || isSuccess ? (
          //this.onErrorRedirect(history)
          designationUpdateSuccess ? (
            UpdateDesignationSuccessFlashMessage
          ) : null || designationUpdateError ? (
            UpdateDesignationFailedFlashMessage
          ) : null
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div className="tab-pane" id="Staff-add">
            <div className="row clearfix">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Update Designation Details</h3>
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
                          <label>Designation Name</label>
                          <input
                            type="text"
                            name="designationName"
                            className="form-control"
                            onChange={this.changeHandler}
                            value={designationDetails.designationName}
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
                            value={designationDetails.description}
                            rows="4"
                            className="form-control no-resize"
                            placeholder="Please type what you want..."
                          ></textarea>
                        </div>
                      </div>

                      <SubmitButton buttonName={`Update Designation`} />
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
  isLoading: selectDesignationsIsLoading,
  designationToUpdate: selectDesignationToUpdate,
  designationUpdateError: selectDesignationUpdateErrorMessage,
  designationUpdateSuccess: selectDesignationUpdateSuccessMessage,
  designationByIdError: selectDesignationByIdErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDesignationByIdDispatch: (designationId) =>
    dispatch(fetchDesignationByDesignationIdUpdateStart(designationId)),
  updateDesignationDispatch: (designationToUpdate) =>
    dispatch(updateDesignation(designationToUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesignationUpdate);
