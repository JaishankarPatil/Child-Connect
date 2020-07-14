import React, { Component } from "react";
import { connect } from "react-redux";
import SubmitButton from "../submit-button/submit-button.component";
import { createStandard } from "../../redux/standard/standard.actions";

class StandardCreate extends Component {
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
    const { createStandardDispatch } = this.props;
    const { standardDetails } = this.state;

    createStandardDispatch(standardDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    let item = { ...this.state.standardDetails };
    item[name] = value;
    this.setState({ standardDetails: item });
  };

  render() {
    const { standardDetails } = this.state;

    return (
      <div className="tab-pane" id="Staff-add">
        <div className="row clearfix">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Standard DETAILS</h3>
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

                  <SubmitButton buttonName={`Add Standard`} />
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
  createStandardDispatch: (newStandard) =>
    dispatch(createStandard(newStandard)),
});

export default connect(null, mapDispatchToProps)(StandardCreate);
