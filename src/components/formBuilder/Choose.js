import React from "react";
import '../../assets/scss/main.scss'

const Choose = () => {
  let option_id = [0, 1, 2];
  let options = [{ name: "Dotted" }, { name: "Dashed" }, { name: "Double" }];
  let selectedOptionId = 0;

  return (
    <div className="col p-0 m-0 justify-content-evenly border rounded h-80 ms-5">
      <div className="d-flex flex-column px-3 h-40">
        <div className="mt-1 d-flex justify-content-between">
          <p className="px-4 pt-3 pb-0 m-0 fs-4 fw-bold">Choose Shape</p>
          <button className="btn text-primary fs-5 fw-bold">View More</button>
        </div>
        <div className="p-3 mt-3 d-flex justify-content-evenly">
          <i className="bi bi-square eng-icons"></i>
          <i className="bi bi-square eng-icons"></i>
          <i className="bi bi-square eng-icons"></i>
          <i className="bi bi-circle eng-icons"></i>
          <i className="bi bi-star eng-icons"></i>
          <i className="bi bi-triangle eng-icons"></i>
          <i className="bi bi-circle eng-icons"></i>
        </div>
      </div>
      <div className="px-3 pb-4 pt-0 d-flex flex-column h-40">
        <p className="px-4 p-2 m-0 fs-4 fw-bold">Choose Color</p>
        <div className="p-4 d-flex justify-content-evenly">
          <div className="px-2 w-25">
            <label htmlFor="exampleColorInput" className="form-label">
              Fill
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              title="Choose your color"
            />
          </div>
          <div className="px-2">
            <label htmlFor="exampleColorInput" className="form-label">
              Border
            </label>
            <input
              type="color"
              className="form-control form-control-color"
              id="exampleColorInput"
              title="Choose your color"
            />
          </div>
          <div className="px-2 w-50">
            <label htmlFor="exampleSelect" className="form-label">
              Outline Style
            </label>
            <select
              defaultValue={selectedOptionId}
              id="exampleSelect"
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              {option_id.map((id) => (
                <option key={id} value={id}>
                  {options[id].name}
                </option>
              ))}
            </select>
          </div>
          <div className="px-2 object-fit-contain">
            <label htmlFor="customRange1" className="form-label">
              Outline thickness:2px
            </label>
            <input type="range" className="form-range" id="customRange1" />
          </div>
        </div>
        <div className="text-end pe-4">
          <button type="button" className="btn btn-secondary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choose;
