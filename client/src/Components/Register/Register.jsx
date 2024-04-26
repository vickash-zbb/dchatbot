import React, { useState } from "react";
import backgroundimg from "../Assets/loginimg.png";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import "../Register/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { email, username, password };
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, navigate to next page
      console.log("Form is valid, navigating to next page");
      window.location.href = "/questions";
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const handleClearErrors = () => {
    setErrors({});
  };

  return (
    <div className="container">
      <div className="register row">
        <div className="col-md-6 registerleft">
          <img src={backgroundimg} alt="" className="coverimage" />
          <div className="headtittle">
            <h3>"Start a Conversation, Find Your Balance</h3>
            <p>
              Start a conversation today and take the first step towards a
              healthier mind."
            </p>
            <div className="footerregister">
              <span>Did you already have a account..</span>
              <Link to={"/"}>
                <button className="btn">Log in</button>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="form col-md-6 d-flex flex-column align-items-center justify-content-center ">
          <div className="headerdiv text-center">
            <img src={logo} alt="logo" className="logo" />
            <h3>Welcome Back!</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="form col-md-8 d-flex flex-column"
          >
            <span className="text-center">Login Status will go here</span>
            <div className="inputdiv">
              <label htmlFor="Email Id">Email Id</label>
              <div className="input">
                <MdEmail />
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Id"
                />
              </div>
              {errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>
            <div className="inputdiv">
              <label htmlFor="Username">Username</label>
              <div className="input">
                <IoMdPerson />
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Name"
                />
              </div>
              {errors.username && (
                <div style={{ color: "red" }}>{errors.username}</div>
              )}
            </div>
            <div className="inputdiv">
              <label htmlFor="Password">Password</label>
              <div className="input">
                <MdPrivacyTip />
                <input
                  type="Password"
                  id="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
              {errors.password && (
                <div style={{ color: "red" }}>{errors.password}</div>
              )}
            </div>
            <button type="submit" className="primary_btn">
              Register
            </button>
            {Object.keys(errors).length > 0 && (
              <button
                type="button"
                className="secondary_btn"
                onClick={handleClearErrors}
              >
                Clear Errors
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
