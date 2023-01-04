import React, { Component } from "react";
import { setTheme } from "@clientio/rappid";

import { StencilService } from "./Diagram/services/stencil-service";
import { ToolbarService } from "./Diagram/services/toolbar-service";
import { InspectorService } from "./Diagram/services/inspector-service";
import { HaloService } from "./Diagram/services/halo-service";
import { KeyboardService } from "./Diagram/services/keyboard-service";
import RappidService from "./Diagram/services/kitchen-sink-service";

import { ThemePicker } from "./Diagram/views/theme-picker";
import { sampleGraphs } from "./Diagram/config/sample-graphs";

import "./Diagram/css/style.css";
import "./Diagram/css/theme-picker.css";
import "../assets/scss/DrawToolPage/DrawToolPage.scss";

class Diagram extends Component {
  constructor(props) {
    super(props);
    this.appRef = React.createRef();
    this.themePickerRef = React.createRef();
  }

  componentDidMount() {
    setTheme("modern");

    const service = new RappidService(
      this.appRef.current,
      new StencilService(),
      new ToolbarService(),
      new InspectorService(),
      new HaloService(),
      new KeyboardService()
    );
    this.rappid = service;
    service.startRappid();
    // service.graph.fromJSON(JSON.parse(sampleGraphs.emergencyProcedure));

    const themePicker = new ThemePicker({
      el: this.themePickerRef.current,
      mainView: service,
    });
    themePicker.render();
    this.themePicker = themePicker;
  }

  componentWillUnmount() {
    this.rappid.stopRappid();
    this.themePicker.remove();
  }

  render() {
    return (
      <div ref={this.appRef} className="Diagram">
        <div className="app-header row">
          <div className="col">
            <div className="app-title ">
              <img src="/logo512.png" className="p-2 img-fluid" alt="" />
            </div>
          </div>
          <div className="col"></div>
          <div className="col px-3 hr-sec">
            <button className="btn btn-info ">Upload</button>
          </div>
        </div>
        <div className="app-body">
          <div className="stencil-container" />
          <div className="paper-container" />
          <div className="sidebar">
            <ul className="nav nav-tabs custom-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Presentation
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Tools
                </button>
              </li>
            </ul>
          </div>

          <div className="navigator-container" />
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="inspector-container" />
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="toolbar-container" />
          </div>
        </div>
      </div>
    );
  }
}

export default Diagram;
