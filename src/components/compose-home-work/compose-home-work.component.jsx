import React from "react";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";

import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";

class ComposeHomeWork extends React.Component {
  constructor(props) {
    super(props);
  }

  onChange(content) {
    console.log("onChange", content);
  }

  render() {
    return (
      <ReactSummernote
        value="Default value"
        options={{
          lang: "ru-RU",
          height: 350,
          dialogsInBody: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["color", ["color"]],
            ["para", ["ul", "ol", "paragraph"]],
            ["insert", ["link", "picture", "video", "file"]],
            ["view", ["fullscreen", "codeview"]],
          ],
        }}
        onChange={this.onChange}
      />
    );
  }
}

export default ComposeHomeWork;
