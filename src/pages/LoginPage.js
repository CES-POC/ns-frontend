import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/LoginPage/LoginPage.scss";
import axios from "../utilities/axios";
import { getItem, setItem } from "../utilities/common/index";
import Alerts from "../components/alert/Alerts";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertVarient, setAlertVarient] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => setShowAlert(false);

  useEffect(() => {
    const user = getItem("User");
    if (user) {
      navigate("/");
    }
  }, []);
  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      if (email.length === 0 || password.length === 0) {
        setAlertMessage("Enter Email & password");
        setAlertVarient("alert alert-danger");
        setShowAlert(true);
        setTimeout(() => {
          closeAlert();
        }, 5000);
        return;
      }
      const { data } = await axios.post("/auth/login", { email, password });
      const { User, accessToken } = data;
      setItem("User", User);
      setItem("accessToken", accessToken);
      navigate("/");
    } catch (error) {
      setAlertMessage("Invalid email or password");
      setShowAlert(true);
      setAlertVarient("alert alert-danger");
      setTimeout(() => {
        closeAlert();
      }, 5000);
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      {showAlert && <Alerts variant={alertVarient} alertshow={alertMessage} />}
      <div className="container-fluid login-page">
        <div className="row">
          {/* img section */}
          <div className="col p-0">
            <img src="/login-img.png" alt="logo" className="login_image" />
          </div>
          {/* img section */}
          {/* form section */}
          <div className="col p-0">
            <div className="logo-container d-flex flex-column justify-content-center">
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
