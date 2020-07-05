import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Footer from "../../footer/footer.component";
import SideBar from "../../side-bar/side-bar.component";
import DatePicker from "react-datepicker";
import Navigation from "../../navigation/navigation.component";
import GridView from "../../grid-view/grid-view.component";
import CustomeAdd from "../../custome-add/custome-add.component";
import DesignationListView from "../../designation-list-view/designation-list-view.component";
import { selectDesignationsIsLoading } from "../../../redux/designation/designation.selectors";
import Spinner from "../../with-spinner/with-spinner.component";

import DESIGNATION_DATA from "./designation_data";
import { fetchDesignationsStart } from "../../../redux/designation/designation.actions";

class Designation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designationList: DESIGNATION_DATA,
    };
  }

  componentDidMount() {
    const { fetchDesignationsStartDispatch } = this.props;
    fetchDesignationsStartDispatch();
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
              pageTitle={"DESIGNATION"}
              navigationItems={navigationItems}
            />
            <div className="section-body mt-4">
              <div className="container-fluid">
                <div className="tab-content">
                  {isLoading ? <Spinner /> : <DesignationListView />}

                  <GridView />
                  <CustomeAdd
                    headerName={"DESIGNATIO"}
                    fieldName={"Designation"}
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
  isLoading: selectDesignationsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDesignationsStartDispatch: () => dispatch(fetchDesignationsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Designation);
