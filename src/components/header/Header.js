import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/scss/Header/Header.scss";
import { getItem, removeItem } from "../../utilities/common/index";
import logo from '../../assets/img/ns_logo.svg'
import userIcon from '../../assets/img/user_icon.svg'


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
    <div className="header-mainDiv d-flex align-items-center">
      <img src={logo} className='ns-logo ms-4' alt="logo-svg" />
      <img src={userIcon} className='user-icon me-5' alt="user_icon-svg" />
      {/* <button
        type="button"
        className="btn btn-primary logout-btn"
        onClick={HandlerLogout}
      >
        Logout
      </button> */}
    </div>
  );
};

export default Header;
