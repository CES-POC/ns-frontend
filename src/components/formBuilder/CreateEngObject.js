import React from "react";
import Info from "./Info";
import Choose from "./Choose";

const CreateEngObject = () => {
  return (
    <div className="container mt-3 mb-5">
      <p className="pt-4 pb-3 fs-4 fw-bold">Create Eng Object</p>
      <div
        className="row d-flex justify-content-evenly p-0 m-0"
        style={{ height: "400px" }}
      >
        <Info />
        <Choose />
      </div>
    </div>
  );
};

export default CreateEngObject;
