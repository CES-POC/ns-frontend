import React from "react";

const Info = () => {
  return (
    <div className="px-0 col border rounded h-80">
      <div className="px-5 pt-3 pb-3 bg-Light">
        <form>
          <p className="fs-4 fw-bold">Information Input</p>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="email"
              className="form-control"
              placeholder="eg- Neosilica Plant Floor 1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Type</label>
            <input
              type="email"
              className="form-control"
              placeholder="eg- Neosilica Plant Floor 1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Display Name</label>
            <input
              type="email"
              className="form-control"
              placeholder="eg- Neosilica Plant Floor 1"
            />
          </div>
          <div className="pt-3 text-end">
            <button type="button" className="btn btn-secondary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;
