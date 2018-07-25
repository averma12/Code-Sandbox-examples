import React, { Component } from "react";
import { Collapse } from "antd";
import tv4 from "tv4";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class JsonValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputJson: "",
      schema: {}
    };
  }

  handleChange = event => {
    this.setState({ inputJson: event });
  };

  render() {
    return (
      <div className="app">
        <h3>This is JSON validation shit</h3>
        <hr />
        <Collapse.Panel header="Input Json" forceRender="true">
          <ReactQuill
            theme="snow"
            modules={JsonValidation.modules}
            formats={JsonValidation.formats}
            value={this.state.inputJson}
            bounds={".app"}
            onChange={this.handleChange}
          />
        </Collapse.Panel>
      </div>
    );
  }
}

JsonValidation.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};

JsonValidation.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

export default JsonValidation;
