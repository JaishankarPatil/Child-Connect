import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Spinner from "../with-spinner/with-spinner.component";

import SubmitButton from "../submit-button/submit-button.component";
import {
  selectStandardsIsLoading,
  selectStandardToUpdate,
  selectStandardUpdateErrorMessage,
  selectStandardUpdateSuccessMessage,
  selectStandardByIdErrorMessage,
} from "../../redux/standard/standard.selectors";
import {
  fetchStandardByStandardIdUpdateStart,
  updateStandard,
} from "../../redux/standard/standard.actions";

class StandardUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standardDetails: {
        standardName: "",
        description: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { updateStandardDispatch, history } = this.props;
    const { standardDetails } = this.state;
    updateStandardDispatch(standardDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.standardDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ standardDetails: item });
  };

  componentDidMount() {
    console.log(`${this.props.match.params.standardId}`);
    alert("componentDidMount");

    const { fetchStandardByIdDispatch, standardToUpdate } = this.props;
    const subjcetId = this.props.match.params.standardId;
    fetchStandardByIdDispatch(subjcetId);
    console.log("standardToUpdate", standardToUpdate);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    alert("componentWillReceiveProps");
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const standardToUpdateData = nextProps.standardToUpdate;
    console.log("standardToUpdateData", standardToUpdateData);

    alert("stop");
    this.setState({ standardDetails: standardToUpdateData });
  }

  reloadThePage(history) {
    history.push("/standard");
  }

  onErrorRedirect(history) {
    history.push("/standard");
  }

  render() {
    let isError = false;
    let isSuccess = false;
    const { standardDetails } = this.state;
    const {
      standardUpdateError,
      history,
      isLoading,
      standardUpdateSuccess,
    } = this.props;
    if (standardUpdateError) {
      isError = true;
    }

    if (standardUpdateSuccess) {
      isSuccess = true;
    }

    const UpdateStandardSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Standard is updated SuccessFully!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateStandardFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Failed To update standard, please contact{" "}
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
          standardUpdateSuccess ? (
            UpdateStandardSuccessFlashMessage
          ) : null || standardUpdateError ? (
            UpdateStandardFailedFlashMessage
          ) : null
        ) : isLoading ? (
          <Spinner />
        ) : (
          <div className="tab-pane" id="Staff-add">
            <div className="row clearfix">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Update Standard Details</h3>
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
                          <label>Standard Name</label>
                          <input
                            type="text"
                            name="standardName"
                            className="form-control"
                            onChange={this.changeHandler}
                            value={standardDetails.standardName}
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
                            value={standardDetails.description}
                            rows="4"
                            className="form-control no-resize"
                            placeholder="Please type what you want..."
                          ></textarea>
                        </div>
                      </div>

                      <SubmitButton buttonName={`Update Standard`} />
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
  isLoading: selectStandardsIsLoading,
  standardToUpdate: selectStandardToUpdate,
  standardUpdateError: selectStandardUpdateErrorMessage,
  standardUpdateSuccess: selectStandardUpdateSuccessMessage,
  standardByIdError: selectStandardByIdErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStandardByIdDispatch: (standardId) =>
    dispatch(fetchStandardByStandardIdUpdateStart(standardId)),
  updateStandardDispatch: (standardToUpdate) =>
    dispatch(updateStandard(standardToUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StandardUpdate);
