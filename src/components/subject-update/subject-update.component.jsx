import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { withRouter, Link } from "react-router-dom";
import { Route, Redirect } from "react-router";

import SubmitButton from "../submit-button/submit-button.component";
import {
  selectSubjectToUpdate,
  selectSubjectUpdateErrorMessage,
  selectSubjectUpdateSuccessMessage,
  selectSubjectByIdErrorMessage,
} from "../../redux/subject/subject.selectors";
import {
  fetchSubjectBySubjectIdUpdateStart,
  updateSubject,
} from "../../redux/subject/subject.actions";

class SubjectUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectDetails: {
        subjectName: "",
        discription: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { updateSubjectDispatch, history } = this.props;
    const { subjectDetails } = this.state;
    updateSubjectDispatch(subjectDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.subjectDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ subjectDetails: item });
  };

  componentDidMount() {
    console.log(`${this.props.match.params.subjectId}`);

    const { fetchSubjectByIdDispatch, subjectToUpdate } = this.props;
    const subjcetId = this.props.match.params.subjectId;
    fetchSubjectByIdDispatch(subjcetId);
    console.log("subjectToUpdate", subjectToUpdate);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const subjectToUpdateData = nextProps.subjectToUpdate;
    this.setState({ subjectDetails: subjectToUpdateData });
  }

  reloadThePage(history) {
    history.push("/subject");
  }

  onErrorRedirect(history) {
    history.push("/subject");
  }

  render() {
    let isErrorMessage = false;
    const { subjectDetails } = this.state;
    const { selectSubjectUpdateError, history } = this.props;
    if (selectSubjectUpdateError) {
      isErrorMessage = true;
    }

    const UpdateSubjectSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Subject is updated SuccessFully!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateSubjectFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Failed To update subject, please contact{" "}
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
          UpdateSubjectFailedFlashMessage
        ) : (
          <div className="tab-pane" id="Staff-add">
            <div className="row clearfix">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Update Subject Details</h3>
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
                          <label>Subject Name</label>
                          <input
                            type="text"
                            name="subjectName"
                            className="form-control"
                            onChange={this.changeHandler}
                            value={subjectDetails.subjectName}
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
                            name="discription"
                            onChange={this.changeHandler}
                            value={subjectDetails.discription}
                            rows="4"
                            className="form-control no-resize"
                            placeholder="Please type what you want..."
                          ></textarea>
                        </div>
                      </div>

                      <SubmitButton buttonName={`Update Subject`} />
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
  subjectToUpdate: selectSubjectToUpdate,
  selectSubjectUpdateError: selectSubjectUpdateErrorMessage,
  selectSubjectUpdateSuccess: selectSubjectUpdateSuccessMessage,
  selectSubjectByIdError: selectSubjectByIdErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjectByIdDispatch: (subjectId) =>
    dispatch(fetchSubjectBySubjectIdUpdateStart(subjectId)),
  updateSubjectDispatch: (subjectToUpdate) =>
    dispatch(updateSubject(subjectToUpdate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubjectUpdate);
