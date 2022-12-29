import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import Modal from "../Modal/Modal";
import "../../assets/scss/sideBar/sideBar.scss";

const SideBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <div className="sideBar-mainDiv">
      <div>
        <h5 className="sideNav">
          Create System
          <span className="px-2" onClick={handleOpenModal}>
            <BsPlusCircleDotted
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            />
          </span>
        </h5>
        <h5 className="sideNav">
          Create shapes
          <span className="px-2">
            <BsPlusCircleDotted />
          </span>
        </h5>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default SideBar;
