import React from "react";
import { connect } from "react-redux";
import { selectHomeworkBySubject } from "../../redux/homework/homework.selectors";
import Footer from "../footer/footer.component";
import SideBar from "../side-bar/side-bar.component";
import Navigation from "../navigation/navigation.component";
import { Link } from "react-router-dom";
import VideoPlayer from "../video-player/video-player.component";
import AudioPlayerComponent from "../audio-player/audio-player.component";
import "./homework-container.styles.scss";

class HomeworkContainer extends React.Component {
  render() {
    const { homework } = this.props;

    console.log("homework", homework);
    return (
      <div className="section-body mt-4">
        <div className="container-fluid">
          <div className="tab-content">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">{homework.headLine}</h3>
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
                <div>{homework.description}</div>
                <div>{homework.fileName}</div>
                <div>
                  <img
                    src={`https://walkinchildconnect.cloudjiffy.net/ChildConnectAdminWeb+${homework.filePath}`}
                  />
                </div>

                <div class="mt-4 text-right">
                  <Link to={`/replayhomework/${homework.homeworkId}`}>
                    <button type="button" class="btn btn-success">
                      Replay to Homework
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, { match }) => ({
  //homeworkBySubject: selectHomeworkBySubject("maths")(state),
  //homeworkBySubject: selectHomeworkBySubject(match.params.subject)(state),
});

export default connect(mapStateToProps)(HomeworkContainer);
