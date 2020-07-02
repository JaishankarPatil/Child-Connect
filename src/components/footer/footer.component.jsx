import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-body">
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <a href="#">CHILD_CONNECT</a>
                {" \u00AE  "} 2020
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
