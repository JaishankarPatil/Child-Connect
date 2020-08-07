import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHomeworkBySubject } from "../../redux/homework/homework.selectors";
import Footer from "../footer/footer.component";
import SideBar from "../side-bar/side-bar.component";
import Navigation from "../navigation/navigation.component";
import { Link } from "react-router-dom";
import VideoPlayer from "../video-player/video-player.component";
import AudioPlayerComponent from "../audio-player/audio-player.component";
import {
  selectHomeworksByGroupId,
  selectGroups,
} from "../../redux/homework/homework.selectors";
import { fetchHomeworksByGroupIdStart } from "../../redux/homework/homework.actions";
import HomeworkContainer from "../homework/homework-container.component";
import HomeworkMenu from "../homework/homework-by-group-menu-component";

class HomeworkByGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupsList: [],
    };
  }

  componentDidMount() {
    const { fetchHomeworksByGroupIdStartDispatch, groups } = this.props;
    fetchHomeworksByGroupIdStartDispatch(this.props.match.params.groupId);
    this.setState({ groupsList: groups });
  }

  componentDidUpdate(Pp, Ps, Ss) {
    const {
      fetchHomeworksByGroupIdStartDispatch,
      homeworksByGroupId,
    } = this.props;

    if (homeworksByGroupId === Pp.homeworksByGroupId) {
      fetchHomeworksByGroupIdStartDispatch(this.props.match.params.groupId);
    }
  }

  render() {
    const { groupsList } = { ...this.state };
    const {
      fetchHomeworksByGroupIdStartDispatch,
      groups,
      homeworksByGroupId,
    } = this.props;
    const { homeWorkDtoList } = { ...this.props.homeworksByGroupId };

    console.log("groupList one ", groupsList);

    return (
      <div className="font-muli theme-cyan gradient">
        <div id="main_content">
          <SideBar />
          <div className="page">
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
                      <div className="card text-center">
                        <div className="card-header"></div>
                        <HomeworkMenu groupsList={groupsList} />
                        <div className="card text-center">
                          {!!homeWorkDtoList &&
                            homeWorkDtoList.map((homework) => (
                              <HomeworkContainer homework={homework} />
                            ))}
                        </div>
                      </div>
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

const mapStateToProps = createStructuredSelector({
  groups: selectGroups,
  homeworksByGroupId: selectHomeworksByGroupId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeworksByGroupIdStartDispatch: (groupId) =>
    dispatch(fetchHomeworksByGroupIdStart(groupId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeworkByGroupContainer);
