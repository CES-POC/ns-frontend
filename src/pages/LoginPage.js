import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setItem, getItem } from "../utilities/common/index";
import "../assets/scss/LoginPage/LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [err, setErr] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user = getItem("loggedIn");
    if (user) {
      navigate("/");
    }
  }, []);
  const handleLoginForm = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErr("Enter Email & Password");
    }
    if (email === "neosilica@gmail.com" && password === "123456") {
      setItem("loggedIn", true);
      navigate("/");
    } else {
      setErr("*Invalid Email or Password");
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="container-fluid login-page">
        <div className="row">
          {/* img section */}
          <div className="col p-0">
            <img src="/login-img.png" alt="logo" className="login_image" />
          </div>
          {/* img section */}

          {/* form section */}
          <div className="col p-0">
            <div className="logo-container">
              <div className="text-center">
                <img
                  className="img-fluid mt-5 mb-2"
                  src="/logo512.png"
                  alt=""
                />
              </div>
              <div className="form_container">
                <div className="text-left mt-3 ">
                  <h2 className="fw-bolder fs-3">Welcome</h2>
                  <h6 className="fw-semibold">Please login to your account</h6>
                </div>
                <form className="mt-3">
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="neosilica@gmail.com"
                      value={email}
                      onChange={onEmailChange}
                    />
                  </div>
                  {/* {err && <p style={{ color: "red" }}>{err}</p>} */}
                  <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="***********"
                      value={password}
                      onChange={onPasswordChange}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-block mt-3"
                    onClick={handleLoginForm}
                  >
                    Login
                  </button>
                  <div className="text-center mt-4">
                    <a href="" className="text-dark">
                      Terms and Conditions & Privacy Policy
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* form section */}
        </div>
      </div>
    </>
  );
};
export default LoginPage;
