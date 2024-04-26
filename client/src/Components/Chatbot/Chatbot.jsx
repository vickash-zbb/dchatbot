import React from "react";

import { FaPlus } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import logo from "../Assets/logo.png";
import userimg from "../Assets/you.png";
import { IoMdPerson } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import "./Chatbot.css";
import { Link } from "react-router-dom";

const Chatbot = () => {
  return (
    <>
      <div className="mainpage row">
        <div className="sidebar col-md-3">
          <div className="upperside">
            <div className="uppersidetop">
              <img
                src={logo}
                className="img-fluid rounded-top logo"
                alt="logo"
              />
              <span>D-chat</span>
            </div>
            <button className="midbtn">
              <FaPlus />
              New Chat
            </button>
          </div>
          <div className="lowerside">
            <div className="listitems">
              <Link to={"/questions"}>
                <button className="btn-secondary">
                  <IoMdPerson />
                  Interest
                </button>
              </Link>
              <Link to={"/"}>
                <button className="btn">
                  <CiLogout />
                  Log out
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="main col-md-9">
          <div className="chats col-md-10">
            <div className="chat">
              <img src={userimg} alt="" className="usericon" />
              <p className="txt">Hello how can i help you</p>
            </div>
            <div className="chat bot">
              <img src={logo} alt="" className="userlogo" />
              <p className="txt">Past 3 days i lost interest in every think </p>
            </div>
          </div>
          <div className="chatfooter d-flex justify-content-center align-items-center">
            <div className="inp">
              <input type="text" placeholder="Send a message.." />
              <button className="send">
                <IoSend />
              </button>
            </div>
            <p className="mt-3">
              D-chat may provide inaccurate information about people mental
              health support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
