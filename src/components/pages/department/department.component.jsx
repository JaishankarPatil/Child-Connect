import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SideBar from "../../side-bar/side-bar.component";
import Footer from "../../footer/footer.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import DapartmentCreate from "../../department/department-create.component";
import DepartmentListView from "../../department/department-list-view.component";
import { fetchDepartmentsStart } from "../../../redux/department/department.actions";

import {
  selectDepartmentsIsLoading,
  selectdeleteDepartmentSuccessMessage,
  selectDepartmentCreateSuccessMessage,
  selectDepartmentsErrorMessage,
  selectDepartmentCreateErrorMessage,
  selectdeleteDepartmentErrorMessage,
  selectDepartmentUpdateErrorMessage,
  selectDepartmentUpdateSuccessMessage,
} from "../../../redux/department/department.selectors";
import Spinner from "../../with-spinner/with-spinner.component";

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchDepartmentListDispatch } = this.props;
    fetchDepartmentListDispatch();
  }

  reloadThePage(history) {
    history.go(0);
  }

  render() {
    let isSuccess = false;
    let isError = false;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const {
      history,
      isLoading,
      fetchAllDepartmentsError,
      departmentCreateSuccess,
      departmentDeleteSuccess,
      departmentUpdateError,
      departmentDeleteError,
      departmentCreateError,
      departmentUpdateSuccess,
    } = this.props;

    if (
      departmentCreateSuccess ||
      departmentDeleteSuccess ||
      departmentUpdateSuccess
    ) {
      isSuccess = true;
    }

    if (
      fetchAllDepartmentsError ||
      departmentUpdateError ||
      departmentDeleteError ||
      departmentCreateError ||
      fetchAllDepartmentsError
    ) {
      alert("fetchAllDepartmentsError");
      isError = true;
    }

    const CreateDepartmentSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        New Department is created SuccessFully .....!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const DeleteDepartmentSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Department is deleted SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const UpdateDepartmentSuccessFlashMessage = (
      <div class="alert alert-success" role="alert">
        Department is updated SuccessFully ...!
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.reloadThePage(history)}
        ></button>
      </div>
    );

    const CreatDepartmentFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Creation of departent failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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

    const UpdateDepartmentFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Update of departent failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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

    const DeleteDepartmentFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        Deleting of department failed, please contact{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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

    const FetchDepartmentsFailedFlashMessage = (
      <div class="alert alert-danger" role="alert">
        No departments availebel please contact admin{" "}
        <a href="#" class="alert-link">
          SUPPORT@childconnect.com
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
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation
              pageTitle={"DEPARTMENT"}
              navigationItems={navigationItems}
            />
            {isSuccess || isError ? (
              departmentCreateSuccess ? (
                CreateDepartmentSuccessFlashMessage
              ) : null || departmentDeleteSuccess ? (
                DeleteDepartmentSuccessFlashMessage
              ) : null || departmentUpdateSuccess ? (
                UpdateDepartmentSuccessFlashMessage
              ) : null || departmentUpdateError ? (
                UpdateDepartmentFailedFlashMessage
              ) : null || departmentDeleteError ? (
                DeleteDepartmentFailedFlashMessage
              ) : null || departmentCreateError ? (
                CreatDepartmentFailedFlashMessage
              ) : null || fetchAllDepartmentsError ? (
                FetchDepartmentsFailedFlashMessage
              ) : null
            ) : (
              <div className="section-body mt-4">
                <div className="container-fluid">
                  <div className="tab-content">
                    {isLoading ? <Spinner /> : <DepartmentListView />}
                    <GridView />

                    <DapartmentCreate />
                  </div>
                </div>
              </div>
            )}

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectDepartmentsIsLoading,
  departmentCreateSuccess: selectDepartmentCreateSuccessMessage,
  departmentDeleteSuccess: selectdeleteDepartmentSuccessMessage,
  fetchAllDepartmentsError: selectDepartmentsErrorMessage,
  departmentCreateError: selectDepartmentCreateErrorMessage,
  departmentDeleteError: selectdeleteDepartmentErrorMessage,
  departmentUpdateError: selectDepartmentUpdateErrorMessage,
  departmentUpdateSuccess: selectDepartmentUpdateSuccessMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDepartmentListDispatch: () => dispatch(fetchDepartmentsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Department);
