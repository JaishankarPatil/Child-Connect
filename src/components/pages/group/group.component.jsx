import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";
import { fetchGroupsStart } from "../../../redux/group/group.actions";
import GroupListView from "../../group-list-view/group-list-view.component";
import Spinner from "../../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectGroupsIsLoading } from "../../../redux/group/group.selectors";

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

  changeHandler = (event) => {
    const { value, name } = event.target;
    let item = { ...this.state.groupDetails };
    item[name] = value;
    this.setState({ groupDetails: item });
  };

  componentDidMount() {
    const { fetchGroupStartsDispatch } = this.props;
    fetchGroupStartsDispatch();
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
            <Navigation pageTitle={"GROUP"} navigationItems={navigationItems} />
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  {isLoading ? <Spinner /> : <GroupListView />}
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

const mapDispatchToProps = (dispatch) => ({
  fetchGroupStartsDispatch: () => dispatch(fetchGroupsStart()),
});

const mapStateToProps = createStructuredSelector({
  isLoading: selectGroupsIsLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Group);
