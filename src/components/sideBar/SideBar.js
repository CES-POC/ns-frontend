import React, { useEffect, useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import "../../assets/scss/sideBar/sideBar.scss";
import { Constants } from "../../utilities/constants";
import Modal from "../Modal/Modal";

const SideBar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sideBarClass, setSideBarClass] = useState("sideBar-mainDiv");
  const { pathname } = useLocation();
  
  useEffect(() => {
    if (pathname === '/formbuilder') {
      setSideBarClass("d-none");
    }
  }, []);
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <div className={sideBarClass}>
      <div>
        <h5 className='sideNav'>
          Create System
          <span className='px-2'>
            <BsPlusCircleDotted
              data-bs-toggle='modal'
              data-bs-target='#staticBackdrop'
            />
          </span>
        </h5>
        <h5 className='sideNav'>
          Create Data Form
          <span className='px-2'>
            <Link className='text-light' to={"/formbuilder"}>
              <BsPlusCircleDotted />
            </Link>
          </span>
        </h5>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default SideBar;
