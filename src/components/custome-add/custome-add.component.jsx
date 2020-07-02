import React, { Component } from "react";
import DatePicker from "react-datepicker";

import SubmitButton from "../submit-button/submit-button.component";

class CustomeAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldDetails: {
        name: "",
        createdBy: "",
        createdOn: new Date(),
        description: "",
      },
    };
  }

  createdOnUpadte = (date) => {
    let item = { ...this.state.departmentDetails };
    item["createdOn"] = date;

    this.setState({ fieldDetails: item });
  };

  handelSubmit = (event) => {
    const field = this.props.fieldName;

    const { fieldDetails } = this.state;
    console.log("field", field);
    console.log("dataVal", fieldDetails);
    console.log("dataVal", fieldDetails.name);
    console.log("dataVal", fieldDetails.createdBy);
    console.log("dataVal", fieldDetails.createdOn);
    console.log("dataVal", fieldDetails.description);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.fieldDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ fieldDetails: item });
  };

  render() {
    const { fieldDetails } = this.state;
    const header = this.props.headerName;
    const field = this.props.fieldName;
    const group = this.props.group;
    const { history } = this.props;

    return (
      <div className="tab-pane" id="Staff-add">
        <div className="row clearfix">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{header} DETAILS</h3>
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
                      <label>{field} Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={fieldDetails.name}
                      ></input>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="form-group"></div>
                  </div>

                  {!group ? null : (
                    <div className="col-sm-12">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          history.push("/addgroupmember");
                        }}
                      >
                        Add Members To Group
                      </button>
                    </div>
                  )}

                  <div className="col-sm-12">
                    <div className="form-group mt-3">
                      <label>Description</label>
                      <textarea
                        name="description"
                        onChange={this.changeHandler}
                        value={fieldDetails.description}
                        rows="4"
                        className="form-control no-resize"
                        placeholder="Please type what you want..."
                      ></textarea>
                    </div>
                  </div>

                  <SubmitButton buttonName={`Add ${field}`} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomeAdd;
