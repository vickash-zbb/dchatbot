import React, { useState } from "react";
import "./Question.css";
import { Link } from "react-router-dom";
const Questions = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [favoritePerson, setFavoritePerson] = useState("");
  const [feeling, setFeeling] = useState("");
  const [isSad, setIsSad] = useState("");
  const [lostInterest, setLostInterest] = useState("");
  const [restless, setRestless] = useState("");
  const [support, setSupport] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !name ||
      !gender ||
      !favoritePerson ||
      !feeling ||
      !isSad ||
      !lostInterest ||
      !restless ||
      !support
    ) {
      alert("Please fill in all fields");
      return;
    }

    // TODO: Handle the form submission
    console.log({
      name,
      gender,
      favoritePerson,
      feeling,
      isSad,
      lostInterest,
      restless,
      support,
    });
  };
  return (
    <>
      <div className="question container ">
        <div className="row justify-content-center">
          <div className="col-md-8 questionlist">
            <form onSubmit={handleSubmit}>
              <ol>
                <li>
                  <div className="questionlisthead d-flex flex-column my-4">
                    <label htmlFor="name">What’s your Name?</label>
                    <div className="input mt-2">
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="gender">
                    <p>Select gender</p>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={handleGenderChange}
                      />
                      Male
                    </label>
                    <label className="mx-3">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={handleGenderChange}
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === "other"}
                        onChange={handleGenderChange}
                      />
                      Other
                    </label>
                    <div className="my-2">Selected Gender: {gender}</div>
                  </div>
                </li>
                <li>
                  <div className="questionlisthead d-flex flex-column my-4">
                    <label htmlFor="favoritePerson">
                      Who’s is your favourite person?
                    </label>
                    <div className="input mt-2">
                      <input
                        type="text"
                        id="favoritePerson"
                        placeholder="Enter your favourite person"
                        value={favoritePerson}
                        onChange={(e) => setFavoritePerson(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="questionlisthead d-flex flex-column my-4">
                    <label htmlFor="feeling">
                      How have you been feeling lately?
                    </label>
                    <div className="input mt-2">
                      <input
                        type="text"
                        id="feeling"
                        placeholder="Enter your feeling"
                        value={feeling}
                        onChange={(e) => setFeeling(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="questionlisthead d-flex flex-column my-4">
                    <label htmlFor="isSad">
                      Have you felt sad, hopeless, or irritable recently?
                    </label>
                    <div className="input mt-2">
                      <input
                        type="text"
                        id="isSad"
                        placeholder="Enter your response"
                        value={isSad}
                        onChange={(e) => setIsSad(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="questionlisthead d-flex flex-column my-4">
                    <label htmlFor="lostInterest">
                      Have you lost interest in things you used to enjoy?
                    </label>
                    <div className="input mt-2">
                      <input
                        type="text"
                        id="lostInterest"
                        placeholder="Enter your response"
                        value={lostInterest}
                        onChange={(e) => setLostInterest(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="questionlisthead d-flex flex-column my-4">
                    <label htmlFor="restless">
                      Do you feel restless or find it hard to sit still?
                    </label>
                    <div className="input mt-2">
                      <input
                        type="text"
                        id="restless"
                        placeholder="Enter your response"
                        value={restless}
                        onChange={(e) => setRestless(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="questionlisthead d-flex flex-column my-4">
                    <label htmlFor="support">
                      Do you have friends or family you can talk to for support?
                    </label>
                    <div className="input mt-2">
                      <input
                        type="text"
                        id="support"
                        placeholder="Enter your response"
                        value={support}
                        onChange={(e) => setSupport(e.target.value)}
                      />
                    </div>
                  </div>
                </li>
              </ol>
              <div className="text-center d-block">
                <button type="submit" className="primary_btn">
                  Save and Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
