import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SideBar from "../../side-bar/side-bar.component";
import Footer from "../../footer/footer.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";
import DepartmentListView from "../../department-list-view/department-list-view.component";
import { fetchDepartmentsStart } from "../../../redux/department/department.actions";
import { selectDepartmentsIsLoading } from "../../../redux/department/department.selectors";
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

  render() {
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

    const { isLoading } = this.props;

    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
            <Navigation
              pageTitle={"DEPARTMENT"}
              navigationItems={navigationItems}
            />
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <GridView />
                  {isLoading ? <Spinner /> : <DepartmentListView />}

                  <CustomeAdd
                    headerName={"DEPARTMENT"}
                    fieldName={"Department"}
                  />
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectDepartmentsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDepartmentListDispatch: () => dispatch(fetchDepartmentsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Department);
