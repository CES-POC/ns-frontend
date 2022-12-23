import React from "react";
import "../../assets/scss/ViewStages/ViewStages.scss";

const ViewStages = () => {
  const arr = [
    {
      systemName: "System 1",
      stages: "Priliminary Drwaing",
      status: "In-Progress",
    },
    {
      systemName: "System 2",
      stages: "Field Verification",
      status: "Completed",
    },
    { systemName: "System 3", stages: "Adjustments", status: "Rejected" },
    { systemName: "system 4", stages: "Approval", status: "" },
  ];
  return (
    <div className="container main-dashboard">
      <div className="row mx-5 mt-4 w-70">
        <div className="col">
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Customer </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col">
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Location</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className=" d-flex justify-content-between mt-5">
        <h5>System</h5>
        <h5>Stages</h5>
        <h5>Status</h5>
        <h5></h5>
      </div>
      <div>
        <div className="accordion mt-3" id="dashboard_acc">
          {arr.map(({ systemName, stages, status }, index) => (
            <div key={"acc" + index} className="accordion-item">
              <div className="accordion-header" id={"acc" + index}>
                <div className=" d-flex justify-content-between">
                  <h6 className="system-values">{systemName}</h6>
                  <h6 className="system-values">{stages}</h6>
                  <h6 className="system-values">{stages}</h6>
                  <button
                    className="accordion-button collapsed acrd-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#acc_body" + index}
                    aria-expanded="false"
                    aria-controls={"acc_body" + index}
                  ></button>
                </div>
              </div>
              <div
                id={"acc_body" + index}
                className="accordion-collapse collapse"
                aria-labelledby={"acc" + index}
                data-bs-parent="#dashboard_acc"
              >
                <div className=" accordion-body">
                  <div className="row">
                    <div className="col mt-3 col-sm-1 col-md-6 col-lg-3 col-xl-3">
                      <img
                        className="system_img border"
                        src="/images/autocad.png"
                      ></img>
                      <div className="d-flex flex-wrap justify-content-evenly">
                        <p>v_1.1</p>
                        <p>
                          <a className="link-dark" href="#">
                            view history
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col mt-3 col-sm-1 col-md-6 col-lg-3 col-xl-3">
                      <img
                        className="system_img border"
                        src="/images/autocad.png"
                      ></img>
                      <div className="d-flex flex-wrap justify-content-evenly">
                        <p>v_1.1</p>
                        <p>
                          <a className="link-dark" href="#">
                            view history
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col mt-3 col-sm-1 col-md-6 col-lg-3 col-xl-3">
                      <img
                        className="system_img border"
                        src="/images/autocad.png"
                      ></img>
                      <div className="d-flex flex-wrap justify-content-evenly">
                        <p>v_1.1</p>
                        <p>
                          <a className="link-dark" href="#">
                            view history
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col mt-3 col-sm-1 col-md-6 col-lg-3 col-xl-3">
                      <img
                        className="system_img border"
                        src="/images/autocad.png"
                      ></img>
                      <div className="d-flex flex-wrap justify-content-evenly">
                        <p>v_1.1</p>
                        <p>
                          <a className="link-dark" href="#">
                            view history
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewStages;
