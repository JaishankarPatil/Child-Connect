import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";
import { fetchStandardsStart } from "../../../redux/standard/standard.actions";
import { selectStandardsIsLoading } from "../../../redux/standard/standard.selectors";
import Spinner from "../../with-spinner/with-spinner.component";
import StandardListView from "../../standard-list-view/standard-list-view.component";

import STANDARD_DATA from "./standard_data";

class Standard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardList: STANDARD_DATA,
    };
  }

  componentDidMount() {
    const { fetchStandardsStartDispatch } = this.props;
    fetchStandardsStartDispatch();
  }

  render() {
    const { isLoading } = this.props;
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
                  {isLoading ? <Spinner /> : <StandardListView />}
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

const mapStateToProps = createStructuredSelector({
  isLoading: selectStandardsIsLoading,
});

const mapDispatcToProps = (dispatch) => ({
  fetchStandardsStartDispatch: () => dispatch(fetchStandardsStart()),
});

export default connect(mapStateToProps, mapDispatcToProps)(Standard);
