import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/scss/Header/Header.scss";
import { removeItem } from "../../utilities/common/index";

const Header = () => {
  const navigate = useNavigate();
  const HandlerLogout = () => {
    removeItem("loggedIn");
    navigate("/login");
  };
  useEffect(() => {
    const user = localStorage.getItem("loggedIn");
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="header-mainDiv">
      {/* <h1 className="header-title">NEW SILICA DRAW TOOL</h1> */}

      <img src="/logo512.png" className="p-2" alt="" />
      <button
        type="button"
        class="btn btn-primary logout-btn"
        onClick={HandlerLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
