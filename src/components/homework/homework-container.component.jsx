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
    const { id, homeworks } = this.props.homeworkBySubject;

    console.log("homeworkBySubject", id);
    console.log("homeworkBySubject", homeworks);
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
                        <div className="card-header">
                          <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <Link to="/homework/maths">Maths</Link>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <Link to="/homework/science">Science</Link>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#">
                                <Link to="/homework/social">Social</Link>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link " href="#">
                                <Link to="/homework/english">English</Link>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div>
                            {homeworks.map((homework) => (
                              <div>
                                {homework.title ? (
                                  <p>{homework.title}</p>
                                ) : null}
                                {homework.imageUrl ? (
                                  <div className="imgeContainer">
                                    <img src={homework.imageUrl} />
                                  </div>
                                ) : null}
                                {homework.audioUrl ? (
                                  <div className="audioPlayerContainer">
                                    <AudioPlayerComponent
                                      src={homework.audioUrl}
                                      autoPlay={false}
                                    />
                                  </div>
                                ) : null}
                                {homework.videoUrl ? (
                                  <VideoPlayer src={homework.videoUrl} />
                                ) : null}
                                {homework.content ? (
                                  <p>{homework.content}</p>
                                ) : null}
                                {homework.fileURl ? (
                                  <a
                                    className="nav-link "
                                    href={homework.fileURl}
                                  >
                                    Download the attachment
                                  </a>
                                ) : null}

                                {homework.docUrl ? (
                                  <div>
                                    <p>Holidy home work </p>
                                    <a
                                      className="nav-link "
                                      href={homework.docUrl}
                                    >
                                      Holiday home work
                                    </a>
                                  </div>
                                ) : null}
                              </div>
                            ))}
                          </div>
                          <div class="mt-4 text-right">
                            <button type="button" class="btn btn-success">
                              Replay to Homework
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-secondary"
                            >
                              Draft
                            </button>
                            <a
                              href="app-email.html"
                              class="btn btn-outline-secondary"
                            >
                              Cancel
                            </a>
                          </div>
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

const mapStateToProps = (state, { match }) => ({
  //homeworkBySubject: selectHomeworkBySubject("maths")(state),
  homeworkBySubject: selectHomeworkBySubject(match.params.subject)(state),
});

export default connect(mapStateToProps)(HomeworkContainer);
