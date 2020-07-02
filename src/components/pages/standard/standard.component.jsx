import React, { Component } from "react";

import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import DatePicker from "react-datepicker";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";
import CustomeListView from "../../custome-list-view/custome-list-view.component";

import STANDARD_DATA from "./standard_data";

class Standard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardList: STANDARD_DATA,
    };
  }

  render() {
    const { standardList } = this.state;
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
              pageTitle={"SUBJECT"}
              navigationItems={navigationItems}
            />{" "}
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <CustomeListView dataList={standardList} />
                  <GridView />
                  <CustomeAdd headerName={"STANDARD"} fieldName={"Standard"} />
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

export default Standard;
