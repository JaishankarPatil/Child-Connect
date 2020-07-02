import React, { Component } from "react";
import SideBar from "../../side-bar/side-bar.component";
import Footer from "../../footer/footer.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";
import CustomeListView from "../../custome-list-view/custome-list-view.component";

import DEPARTMENT_DATA from "./department_data";

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentList: DEPARTMENT_DATA,
    };
  }

  render() {
    const { departmentList } = this.state;
    const navigationItems = {
      listView: "List View",
      gridView: "Grid View",
      add: "Add",
    };

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
                  <CustomeListView dataList={departmentList} />
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

export default Department;
