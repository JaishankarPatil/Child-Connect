import React from "react";
import SubmitButton from "../submit-button/submit-button.component";

class SubjectUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectDetails: {
        subjectName: "",
        description: "",
      },
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();
    const { createSubjectDispatch } = this.props;
    const { subjectDetails } = this.state;
    createSubjectDispatch(subjectDetails);
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
    //calll apii get By id
  }
  render() {
    const { subjectDetails } = this.state;

    return (
      <div className="tab-pane" id="Staff-add">
        <div className="row clearfix">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Subject DETAILS</h3>
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
                        name="description"
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
    );
  }
}

export default SubjectUpdate;
