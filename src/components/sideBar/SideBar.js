import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../assets/scss/sideBar/sideBar.scss";
import Modal from "../Modal/Modal";

const SideBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <div className="sideBar-mainDiv">
      <div>
        <h4 className="sideNav">
          <span className="ms-3">System</span>
          <span className="px-2">
            <BsPlusCircleDotted
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
          </span>
        </h4>
        <h4 className="sideNav ms-3">
          Data Form
          <span className="px-2">
            <Link className="text-light" to={"/formbuilder"}>
              <BsPlusCircleDotted />
            </Link>
          </span>
        </h4>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default SideBar;
