import React, { Component } from "react";
import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import Navigation from "../../navigation/navigation.component";
import CustomeListView from "../../custome-list-view/custome-list-view.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";

import "./group.styles.scss";

import GROUP_DATA from "./group_data";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: GROUP_DATA,

      groupDetails: {
        name: "",
        createdBy: "",
        createdOn: new Date(),
        description: "",
      },
    };
  }

  createdOnUpadte = (date) => {
    let item = { ...this.state.groupDetails };
    item["createdOn"] = date;

    this.setState({ groupDetails: item });
  };

  handelSubmit = (event) => {
    const { groupDetails } = this.state;
    console.log("dataVal", groupDetails);
    console.log("dataVal", groupDetails.name);
    console.log("dataVal", groupDetails.createdBy);
    console.log("dataVal", groupDetails.createdOn);
    console.log("dataVal", groupDetails.description);
  };

  changeHandler = (event) => {
    const { value, name } = event.target;

    console.log("name", name);
    console.log("value", value);

    let item = { ...this.state.groupDetails };
    item[name] = value;

    console.log("item", item);

    this.setState({ groupDetails: item });
  };

  render() {
    const { groupList } = this.state;
    const { groupDetails } = this.state;
    const { history } = this.props;
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
            <Navigation pageTitle={"GROUP"} navigationItems={navigationItems} />
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  <CustomeListView dataList={groupList} group />
                  <GridView />
                  <CustomeAdd headerName={"GROUP"} fieldName={"Group"} group />
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

export default Group;
