import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import API from "../../services/api";
import axios from "axios";
import { Progress } from "reactstrap";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../footer/footer.component";
import SideBar from "../side-bar/side-bar.component";
import DatePicker from "react-datepicker";
import Navigation from "../navigation/navigation.component";
import ComposeHomeWork from "../compose-home-work/compose-home-work.component";
import { fetchSubjectsStart } from "../../redux/subject/subject.actions";
import {
  updateHomework,
  fetchHomeworkByHomeworkId,
} from "../../redux/homework/homework.actions";
import { selectSubjects } from "../../redux/subject/subject.selectors";

import { fetchGroupsStart } from "../../redux/group/group.actions";
import { selectGroups } from "../../redux/group/group.selectors";
import {
  selectHomeworkToUpdate,
  selectHomeworkIsLoading,
  selectHomeworkUpdateSuccessMessage,
  selectHomeworkUpdateErrorMessage,
  selectHomeworkByIdErrorMessage,
} from "../../redux/homework/homework.selectors";

import Spinner from "../with-spinner/with-spinner.component";

import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { Multiselect } from "multiselect-react-dropdown";

const api = API.create();

class HomeworkUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.subjectSelectRef = React.createRef();
    this.groupSelectRef = React.createRef();
    this.fileselectRef = React.createRef();
    this.state = {
      subjectsList: [],
      groupsList: [],
      subjectsSelectedList: [],
      groupsSelectedList: [],
      loaded: 0,
      isLoadingFailed: false,
      selectedFile: [],
      homeworkDetails: {
        description: "",
        fileName: "",
        groupDtoList: [],
        headLine: "",
        subjectDtoList: [],
        homeworkBy: {
          userId: 2,
        },
      },
    };
    this.style = {
      chips: {
        background: "red",
      },
      searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px",
      },
      multiselectContainer: {
        color: "red",
      },
    };
  }

  componentDidMount() {
    const {
      fetchSubjectsStartDispatch,
      fetchGroupStartsDispatch,
      fetchHomeworkByHomeworkIdDispatch,
    } = this.props;
    fetchSubjectsStartDispatch();
    fetchGroupStartsDispatch();
    const homeworkId = this.props.match.params.homeworkId;
    fetchHomeworkByHomeworkIdDispatch(homeworkId);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    this.initialize(nextProps);
  }

  initialize(nextProps) {
    const fetchAllSubjects = nextProps.fetchAllSubjects;
    const fetchAllGroups = nextProps.fetchAllGroups;
    const homeworkToUpdateData = nextProps.homeworkToUpdate;

    var subjectsArray = new Array();
    var selectedSubjectsArray = new Array();
    var groupsArray = new Array();
    var selectedGroupsArray = new Array();
    console.log("fetchAllSubjects", fetchAllSubjects);
    console.log("fetchAllSubjects", fetchAllSubjects);
    console.log("homeworkToUpdateData", homeworkToUpdateData);

    const { groupDtoList, subjectDtoList } = { ...homeworkToUpdateData };

    console.log("groupDtoList", groupDtoList);

    fetchAllSubjects.map((subject) => {
      subjectsArray.push({
        name: `${subject.subjectName}`,
        id: `${subject.subjectId}`,
      });
    });

    if (subjectDtoList) {
      subjectDtoList.map((selectedSubject) => {
        selectedSubjectsArray.push({
          name: `${selectedSubject.subjectName}`,
          id: `${selectedSubject.subjectId}`,
        });
      });
    }

    fetchAllGroups.map((group) => {
      groupsArray.push({
        name: `${group.groupName}`,
        id: `${group.groupId}`,
      });
    });

    if (groupDtoList) {
      groupDtoList.map((selectedGroup) => {
        selectedGroupsArray.push({
          name: `${selectedGroup.groupName}`,
          id: `${selectedGroup.groupId}`,
        });
      });
    }

    const test = this.state.subjectsList;

    console.log("homeworkToUpdateData", homeworkToUpdateData);

    this.setState({ subjectsSelectedList: selectedSubjectsArray });
    this.setState({ groupsSelectedList: selectedGroupsArray });

    this.setState({ subjectsList: subjectsArray });
    this.setState({ groupsList: groupsArray });
    this.setState({ homeworkDetails: homeworkToUpdateData });
  }

  changeHandler = (event) => {
    const { value, name } = event.target;
    let item = { ...this.state.homeworkDetails };
    item[name] = value;
    this.setState({ homeworkDetails: item });
  };

  onSubjectSelect(subjectList, selectedItem) {
    const item = { ...this.state.homeworkDetails };
    let subjectDto = new Array();

    subjectList.map((subject) => {
      subjectDto.push({ subjectId: `${subject.id}` });
    });

    item["subjectDtoList"] = subjectDto;

    console.log("subjectDto", subjectDto);
    this.setState({ homeworkDetails: item });
  }

  onGroupSelect(groupList, selectedItem) {
    const item = { ...this.state.homeworkDetails };
    let groupDto = new Array();
    groupList.map((group) => {
      groupDto.push({ groupId: `${group.id}` });
    });

    item["groupDtoList"] = groupDto;

    console.log("groupDto", groupDto);
    console.log("groupList", groupList);
    console.log("selectedItem", selectedItem);
    this.setState({ homeworkDetails: item });
  }

  onGroupRemove(groupList, selectedItem) {
    const item = { ...this.state.homeworkDetails };
    let groupDto = new Array();
    groupList.map((group) => {
      groupDto.push({ groupId: `${group.id}` });
    });

    item["groupDtoList"] = groupDto;

    console.log("groupDto", groupDto);
    console.log("groupList", groupList);
    this.setState({ homeworkDetails: item });
  }

  quillChangeHandler(value) {
    // this.setState({ text: value });
    const item = { ...this.state.homeworkDetails };
    item["description"] = value;
    console.log("text", value);
    this.setState({ homeworkDetails: item });
  }

  checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = "";
    // list allow mime type
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
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err += files[x].type + " is not a supported format\n";
      }
    }

    if (err !== "") {
      // if message not same old that mean has error
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
    console.log("fileToUpload", fileToUpload.name);
    if (this.checkMimeType(event) && this.checkFileSize(event)) {
      this.setState({ selectedFile: event.target.files[0], loaded: 0 });
    }
  };

  fileUploadResponseHandler = (response) => {
    console.log("fileUploadResponseHandler", response);
    console.log("fileUploadResponseHandler", response.data.fileName);

    if (response.status === 200) {
      toast.success("File is Uploaded Successfully");
    } else {
      toast.error("Failed to uplad the file");
    }

    const item = { ...this.state.homeworkDetails };
    item["fileName"] = response.data.fileName;
    this.setState({ homeworkDetails: item });
  };

  uploadHandler = async () => {
    console.log("helllo", this.state.selectedFile);
    console.log("helllo", this.state.selectedFile.name);
    var currentTime = new Date().getTime();
    var newFileName = currentTime + "_" + this.state.selectedFile.name;
    let data = new FormData();
    data.append("file", this.state.selectedFile, newFileName);

    var cancelToken = axios.CancelToken.source();

    console.log("cancelToken", cancelToken);
    console.log("cancelToken", cancelToken.token);

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
        console.log("werth", response);
        console.log("werth", response.statusText);
        this.fileUploadResponseHandler(response);
      });
    } catch (error) {
      this.setState({ isLoadingFailed: true, loaded: 0 });
      toast.error("Failed to uplad the file");
    }
  };

  handelSubmit = (event) => {
    event.preventDefault();
    const { updateHomeworkDispatch } = this.props;
    const { selectedFile, homeworkDetails } = this.state;
    console.log("selectedFile", selectedFile);
    console.log(
      "homeworkDetails.groupDtoList.size",
      homeworkDetails.groupDtoList.length
    );
    console.log("selectedFile", selectedFile);
    console.log("selectedFile.length", selectedFile.length);
    console.log("selectedFile.name", selectedFile.name);
    console.log("selectedFile.name", !!selectedFile.name);
    console.log("homeworkDetails.fileName", homeworkDetails.fileName);
    console.log("homeworkDetails.fileName", !!homeworkDetails.fileName);
    console.log("homeworkDetails", homeworkDetails);
    if (
      !!homeworkDetails.groupDtoList.length &&
      !!homeworkDetails.subjectDtoList.length &&
      !!homeworkDetails.headLine &&
      (!!homeworkDetails.description || !!homeworkDetails.fileName)
    ) {
      if (!!!homeworkDetails.fileName && !!selectedFile.name) {
        toast.error("File is selected but not uploded");
      } else {
        updateHomeworkDispatch(homeworkDetails);
      }
    } else {
      if (homeworkDetails.groupDtoList.length < 1) {
        toast.error("At least on class Should be selected");
      } else if (homeworkDetails.subjectDtoList.length < 1) {
        toast.error("Subject should not be empty");
      } else if (
        homeworkDetails.headLine === null ||
        homeworkDetails.headLine === ""
      ) {
        toast.error("Title should not be empty");
      } else {
        toast.error("Homework should not be empty");
      }
    }
  };

  clearAll() {
    console.log("selectedFile", this.fileselectRef.current.value);
    this.fileselectRef.current.value = null;
    this.subjectSelectRef.current.resetSelectedValues();
    this.groupSelectRef.current.resetSelectedValues();
    const item = { ...this.state.homeworkDetails };
    item["fileName"] = "";
    item["description"] = "";
    item["headLine"] = "";
    this.setState({ homeworkDetails: item });
  }

  reloadThePage(history) {
    console.log("history", history);
    history.push("/adminhomeworklistview");
  }

  render() {
    let isError = false;
    let isSuccess = false;
    const navigationItems = {
      listView: "Create Homework",
    };

    const { homeworkDetails } = this.state;
    const {
      history,
      isLoading,
      homeworkUpdateSuccessMessage,
      homeworkUpdateErrorMessage,
      homeworkByIdErrorMessage,
    } = this.props;

    if (homeworkUpdateErrorMessage || homeworkByIdErrorMessage) {
      isError = true;
    }

    if (homeworkUpdateSuccessMessage) {
      isSuccess = true;
    }

    console.log("homeworkDetails", homeworkDetails);

    const UpdateGroupSuccessFlashMessage = (
      <div className="alert alert-success" role="alert">
        Homework is updated SuccessFully!
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateGroupFailedFlashMessage = (
      <div className="alert alert-danger" role="alert">
        Failed To update Homework, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@CHILD-CONNECT.com
        </a>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const FetchByIdFailedFlashMessage = (
      <div className="alert alert-danger" role="alert">
        Failed To fetch Homework, to update please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@CHILD-CONNECT.com
        </a>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    console.log("subjectsList", this.state.subjectsList);
    console.log("groupsList", this.state.groupsList);
    console.log("groupsList", !!this.state.groupsList);

    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          {isError || isSuccess ? (
            homeworkUpdateSuccessMessage ? (
              UpdateGroupSuccessFlashMessage
            ) : null || homeworkUpdateErrorMessage ? (
              UpdateGroupFailedFlashMessage
            ) : null || homeworkByIdErrorMessage ? (
              FetchByIdFailedFlashMessage
            ) : null
          ) : isLoading ? (
            <Spinner />
          ) : (
            <div className="page">
              <div className="section-body">
                <div className="container-fluid">
                  <div className="d-flex justify-content-between align-items-center ">
                    <div className="header-action">
                      <h1 className="page-title">Homework List View</h1>
                      <ol className="breadcrumb page-breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Child-Connect</a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Homework List View
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
                        <h3 className="card-title">HOMEWORK DETAILS</h3>
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
                            <div className="col-md-6 col-sm-12">
                              <label>Subject</label>
                              <Multiselect
                                options={this.state.subjectsList}
                                onSelect={this.onSubjectSelect.bind(this)}
                                singleSelect
                                displayValue="name"
                                selectedValues={this.state.subjectsSelectedList}
                                ref={this.subjectSelectRef}
                              />
                            </div>
                            <div className="col-md-6 col-sm-12"></div>

                            <div className="col-md-8 col-sm-12"></div>

                            <div className="col-md-6 col-sm-12">
                              <label>Group</label>
                              <Multiselect
                                options={this.state.groupsList}
                                onSelect={this.onGroupSelect.bind(this)}
                                onRemove={this.onGroupRemove.bind(this)}
                                displayValue="name"
                                name="groups"
                                selectedValues={this.state.groupsSelectedList}
                                ref={this.groupSelectRef}
                              />
                            </div>
                            <div className="col-md-6 col-sm-12"></div>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <div className="form-group">
                              <label>Title</label>
                              <input
                                type="text"
                                className="form-control"
                                name="headLine"
                                onChange={this.changeHandler}
                                value={homeworkDetails.headLine}
                                required
                              ></input>
                            </div>
                          </div>
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
                              modules={HomeworkUpdate.modules}
                              value={homeworkDetails.description}
                              onChange={this.quillChangeHandler.bind(this)}
                              name="description"
                            />
                          </div>

                          <div className="mt-4 text-right">
                            <button type="submit" className="btn btn-success">
                              Update Homework
                            </button>
                            <button
                              onClick={this.clearAll.bind(this)}
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
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetchAllSubjects: selectSubjects,
  fetchAllGroups: selectGroups,
  homeworkToUpdate: selectHomeworkToUpdate,
  isLoading: selectHomeworkIsLoading,
  homeworkUpdateSuccessMessage: selectHomeworkUpdateSuccessMessage,
  homeworkUpdateErrorMessage: selectHomeworkUpdateErrorMessage,
  homeworkByIdErrorMessage: selectHomeworkByIdErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjectsStartDispatch: () => dispatch(fetchSubjectsStart()),
  fetchGroupStartsDispatch: () => dispatch(fetchGroupsStart()),
  fetchHomeworkByHomeworkIdDispatch: (homeworkId) =>
    dispatch(fetchHomeworkByHomeworkId(homeworkId)),
  updateHomeworkDispatch: (updatedHomework) =>
    dispatch(updateHomework(updatedHomework)),
});

HomeworkUpdate.modules = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkUpdate);
