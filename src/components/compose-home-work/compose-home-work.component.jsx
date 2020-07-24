import React from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../assets/js/core";

class ComposeHomeWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
    console.log("text", this.state.text);
  }

  render() {
    return (
      <ReactQuill
        modules={ComposeHomeWork.modules}
        value={this.state.text}
        onChange={this.handleChange}
      />
    );
  }
}
ComposeHomeWork.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default ComposeHomeWork;
