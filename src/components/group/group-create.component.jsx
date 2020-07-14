import React, { Component } from "react";
import { connect } from "react-redux";
import SubmitButton from "../submit-button/submit-button.component";
import { createGroup } from "../../redux/group/group.actions";

class GroupCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupDetails: {
        groupName: "",
        description: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { createGroupDispatch } = this.props;
    const { groupDetails } = this.state;

    createGroupDispatch(groupDetails);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;
    let item = { ...this.state.groupDetails };
    item[name] = value;
    this.setState({ groupDetails: item });
  };

  render() {
    const { groupDetails } = this.state;

    return (
      <div className="tab-pane" id="Staff-add">
        <div className="row clearfix">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Group DETAILS</h3>
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
                      <label>Group Name</label>
                      <input
                        type="text"
                        name="groupName"
                        className="form-control"
                        onChange={this.changeHandler}
                        value={groupDetails.groupName}
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
                        value={groupDetails.description}
                        rows="4"
                        className="form-control no-resize"
                        placeholder="Please type what you want..."
                      ></textarea>
                    </div>
                  </div>

                  <SubmitButton buttonName={`Add Group`} />
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
  createGroupDispatch: (newGroup) => dispatch(createGroup(newGroup)),
});

export default connect(null, mapDispatchToProps)(GroupCreate);
