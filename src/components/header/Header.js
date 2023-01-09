import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/scss/Header/Header.scss";
import { getItem, removeItem } from "../../utilities/common/index";

const Header = () => {
  const navigate = useNavigate();
  const HandlerLogout = () => {
    removeItem("User");
    removeItem("accessToken");
    navigate("/login");
  };

  useEffect(() => {
    const user = getItem("User");
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='header-mainDiv w-auto d-flex justify-content-between'>
      <img src='/logo512.png' className='p-2' alt='' />
      <button
        type='button'
        className='btn btn-primary logout-btn'
        onClick={HandlerLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
