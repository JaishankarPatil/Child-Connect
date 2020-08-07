import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SideBar from "../../../side-bar/side-bar.component";
import Footer from "../../../footer/footer.component";
import { ToastContainer, toast } from "react-toastify";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import { Progress } from "reactstrap";
import axios from "axios";
import { createReplayHomework } from "../../../../redux/replay-homework/replay-homework.actions";

class ReplayHomeWork extends React.Component {
  constructor(props) {
    super(props);
    //{this.props.match.params.homeworkId}
    this.state = {
      loaded: 0,
      isLoadingFailed: false,
      selectedFile: [],
      replayHomeworkDetails: {
        description: "",
        comment: "",
        fileName: "",

        homeWorkDto: {
          homeworkId: 3,
        },
        replyBy: {
          userId: 3,
        },
      },
    };
  }

  changeHandler = (event) => {
    const { value, name } = event.target;
    let item = { ...this.state.replayHomeworkDetails };
    item[name] = value;
    this.setState({ replayHomeworkDetails: item });
  };
  checkMimeType = (event) => {
    let files = event.target.files;
    let err = "";
    const types = [
      "image/png",
      "image/jpeg",
      "image/gif",
      "application/msword",
      "application/pdf",
      "video/mp4",
      "text/plain",
      "audio/mpeg",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ];
    for (var x = 0; x < files.length; x++) {
      if (types.every((type) => files[x].type !== type)) {
        err += files[x].type + " is not a supported format\n";
      }
    }

    if (err !== "") {
      event.target.value = null; // discard selected file
      console.log(err);
      toast.error(err);
      return false;
    }
    return true;
  };

  checkFileSize = (event) => {
    let files = event.target.files;
    let size = 16000000;
    let err = "";
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err += files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    if (err !== "") {
      event.target.value = null;
      console.log(err);
      toast.error("Faile is too large, pick the smaller size file");
      return false;
    }

    return true;
  };

  onFileSelect = (event) => {
    const fileToUpload = event.target.files[0];
    console.log("fileToUpload", fileToUpload);
    if (this.checkMimeType(event) && this.checkFileSize(event)) {
      this.setState({ selectedFile: event.target.files[0], loaded: 0 });
    }
  };

  fileUploadResponseHandler = (response) => {
    if (response.status === 200) {
      toast.success("File is Uploaded Successfully");
    } else {
      toast.error("Failed to uplad the file");
    }

    const item = { ...this.state.replayHomeworkDetails };
    item["fileName"] = response.data.fileName;
    this.setState({ replayHomeworkDetails: item });
  };

  uploadHandler = async () => {
    var currentTime = new Date().getTime();
    var newFileName = currentTime + "_" + this.state.selectedFile.name;
    let data = new FormData();
    data.append("file", this.state.selectedFile, newFileName);

    console.log("this.state.selectedFile", this.state.selectedFile);

    try {
      await axios({
        method: "post",
        headers: {
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJpYXQiOjE1OTM2NzgyOTMsImV4cCI6MTYwOTIzMDI5M30.66Gi4n58gWurSPE16UkpiDXGRsbB7PxtPya5zYySRGVC1ND9-GIX-NdXirRTCXpWedUjPmSY__AHFRAGhJZ4Gw",
        },
        data: data,
        url:
          "https://newchildconnect.cloudjiffy.net/ChildConnectAdminWeb/file/uploadFile",

        onUploadProgress: (ProgressEvent) => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      }).then((response) => {
        this.fileUploadResponseHandler(response);
      });
    } catch (error) {
      this.setState({ isLoadingFailed: true, loaded: 0 });
      toast.error("Failed to uplad the file");
    }
  };

  handelSubmit = (event) => {
    event.preventDefault();
    const { createReplayHomeworkDispatch } = this.props;

    const { selectedFile, replayHomeworkDetails } = this.state;
    console.log("replayHomeworkDetails", replayHomeworkDetails);
    if (
      !!replayHomeworkDetails.description ||
      !!replayHomeworkDetails.fileName
    ) {
      console.log("selectedFile", selectedFile.name);
      if (!!selectedFile.name && !!!replayHomeworkDetails.fileName) {
        alert("file is attached but not uploaded");
      } else {
        createReplayHomeworkDispatch(replayHomeworkDetails);
        alert("success");
      }
    } else {
      console.log("selectedFile", selectedFile.name);
      if (!!selectedFile.name && !!!replayHomeworkDetails.fileName) {
        alert(" from else file is attached but not uploaded");
      } else {
        alert("homework replay should not be empty");
      }
    }
  };

  quillChangeHandler(value) {
    //this.setState({ text: value });
    console.log("test", value.length);
    console.log("test", value.replace(/<(.|\n)*?>/g, ""));
    var finalValue = value.replace(/<(.|\n)*?>/g, "");
    if (
      value.length === 11 &&
      value.replace(/<(.|\n)*?>/g, "").trim().length === 0
    ) {
      finalValue = null;
    } else {
      finalValue = value;
    }
    console.log("finalValue", finalValue);
    const item = { ...this.state.replayHomeworkDetails };
    item["description"] = finalValue;
    this.setState({ replayHomeworkDetails: item });
  }

  render() {
    const { replayHomeworkDetails } = this.state;
    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />

          <div className="page">
            <div className="section-body">
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="header-action">
                    <h1 className="page-title">HOMEWORK REPLAY</h1>
                    <ol className="breadcrumb page-breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Child-Connect</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        HOMEWORK REPLAY
                      </li>
                    </ol>
                  </div>
                  <ul className="nav nav-tabs page-header-tab">
                    <li className="nav-item">
                      <Link className="nav-link" to="/adminhomeworklistview">
                        List View
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/createhomework">
                        Create Homework
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">HOMEWORK REPLAY</h3>
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
                        <div className="col-md-8 col-sm-12">
                          <div className="form-group">
                            <label>Upload File</label>
                            <input
                              type="file"
                              className="form-control"
                              name="selectedFile"
                              onChange={this.onFileSelect.bind(this)}
                              ref={this.fileselectRef}
                            />
                          </div>
                          <div className="form-group">
                            <ToastContainer />
                          </div>

                          <div className="form-group">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={this.uploadHandler.bind(this)}
                            >
                              Upload File
                            </button>
                          </div>
                          {this.state.loaded ? (
                            <div className="form-group">
                              <Progress
                                max="100"
                                color="success"
                                value={this.state.loaded}
                              >
                                {Math.round(this.state.loaded, 2)}%
                              </Progress>
                            </div>
                          ) : null}
                          {this.state.isLoadingFailed ? (
                            <div className="form-group">
                              <Progress max="100" color="danger" value="50">
                                50%
                              </Progress>
                            </div>
                          ) : null}
                        </div>
                        <div className=" col-sm-12">
                          <ReactQuill
                            modules={ReplayHomeWork.modules}
                            value={replayHomeworkDetails.description}
                            onChange={this.quillChangeHandler.bind(this)}
                            name="description"
                          />
                        </div>

                        <div className="col-sm-12">
                          <div className="form-group"></div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                          <div className="form-group">
                            <label>Comment</label>
                            <textarea
                              type="text"
                              className="form-control"
                              name="comment"
                              onChange={this.changeHandler}
                              value={replayHomeworkDetails.comment}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-sm-12"></div>
                        <div className="mt-4 text-right">
                          <button type="submit" className="btn btn-success">
                            Post Homework
                          </button>
                          <button
                            //onClick={this.clearAll.bind(this)}
                            type="button"
                            className="btn btn-primary"
                          >
                            Clear
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

ReplayHomeWork.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const mapDispatchToProps = (dispatch) => ({
  createReplayHomeworkDispatch: (newReplayHomework) =>
    dispatch(createReplayHomework(newReplayHomework)),
});
export default connect(null, mapDispatchToProps)(ReplayHomeWork);
