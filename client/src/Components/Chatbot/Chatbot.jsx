import React, { useEffect, useRef, useState } from "react";

import { FaPlus } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import logo from "../Assets/logo.png";
import userimg from "../Assets/you.png";
import { IoMdPerson } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import "./Chatbot.css";
import { Link } from "react-router-dom";
import { sendMsgToOpenAI } from "../api/Openai";

function Chatbot() {
  //

  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    {
      text: "hi how can i help you",
      isBot: true,
    },
  ]);
  console.log(input);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessage([...message, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(text);
    console.log(res, "final");
    setMessage([
      ...message,
      { text, isBot: false },
      { text: res, isBot: true },
    ]);
    console.log(res);
  };
  const handleEnter = async (e) => {
    if (e.key == "Enter") await handleSend();
  };
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
            <button
              className="midbtn"
              onClick={() => {
                window.location.reload();
              }}
            >
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
            {/* <div className="chat">
              <img src={userimg} alt="" className="usericon" />
              <p className="txt">Hello how can i help you</p>
            </div>
            <div className="chat bot">
              <img src={logo} alt="" className="userlogo" />
              <p className="txt">Past 3 days i lost interest in every think </p>
            </div> */}
            {message.map((message, i) => {
              return (
                <div key={i} className={message.isBot ? "chat bot" : "chat"}>
                  <img
                    src={message.isBot ? logo : userimg}
                    alt=""
                    className="userlogo"
                  />
                  <p className="txt">{message.text}</p>
                </div>
              );
            })}
            <div ref={msgEnd}></div>
          </div>
          <div className="chatfooter d-flex justify-content-center align-items-center">
            <div className="inp">
              <input
                type="text"
                placeholder="Send a message.."
                value={input}
                onKeyDown={handleEnter}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <button className="send" onClick={handleSend}>
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
}

export default Chatbot;
