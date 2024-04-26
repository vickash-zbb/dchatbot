import React, { useState } from "react";
import "./Question.css";
import { Link } from "react-router-dom";

const Questions = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const [favoritePerson, setFavoritePerson] = useState("");
  const [favoritePersonError, setFavoritePersonError] = useState("");

  const [feeling, setFeeling] = useState("");
  const [feelingError, setFeelingError] = useState("");

  const [isSad, setIsSad] = useState("");
  const [isSadError, setIsSadError] = useState("");

  const [lostInterest, setLostInterest] = useState("");
  const [lostInterestError, setLostInterestError] = useState("");

  const [restless, setRestless] = useState("");
  const [restlessError, setRestlessError] = useState("");

  const [support, setSupport] = useState("");
  const [supportError, setSupportError] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!name) {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!gender) {
      setGenderError("Please select your gender");
      isValid = false;
    } else {
      setGenderError("");
    }

    if (!age) {
      setAgeError("Please select your age group");
      isValid = false;
    } else {
      setAgeError("");
    }

    if (!favoritePerson) {
      setFavoritePersonError("Please enter your favorite person");
      isValid = false;
    } else {
      setFavoritePersonError("");
    }

    if (!feeling) {
      setFeelingError("Please enter how you've been feeling lately");
      isValid = false;
    } else {
      setFeelingError("");
    }

    if (!isSad) {
      setIsSadError("Please enter your response");
      isValid = false;
    } else {
      setIsSadError("");
    }

    if (!lostInterest) {
      setLostInterestError("Please enter your response");
      isValid = false;
    } else {
      setLostInterestError("");
    }

    if (!restless) {
      setRestlessError("Please enter your response");
      isValid = false;
    } else {
      setRestlessError("");
    }

    if (!support) {
      setSupportError("Please enter your response");
      isValid = false;
    } else {
      setSupportError("");
    }

    if (isValid) {
      console.log({
        name,
        gender,
        age,
        favoritePerson,
        feeling,
        isSad,
        lostInterest,
        restless,
        support,
      });
      // Navigate to the next page
      window.location.href = "/chatbot";
      // TODO: Handle the form submission
    } else {
      return; // Add this line
    }
  };

  return (
    <>
      <div className="question">
        <div className="row justify-content-center w-100">
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
                    {nameError && (
                      <div style={{ color: "red" }}>{nameError}</div>
                    )}
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
                  {genderError && (
                    <div style={{ color: "red" }}>{genderError}</div>
                  )}
                </li>
                <li>
                  <div className="age">
                    <p>Select age group</p>
                    <label className="age1">
                      <input
                        type="radio"
                        name="age"
                        value="16-18"
                        checked={age === "16-18"}
                        onChange={handleAgeChange}
                      />
                      <span>16-18</span>
                    </label>
                    <label className="mx-3">
                      <input
                        type="radio"
                        name="age"
                        value="19-21"
                        checked={age === "19-21"}
                        onChange={handleAgeChange}
                      />
                      19-21
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="age"
                        value="more than 22"
                        checked={age === "more than 22"}
                        onChange={handleAgeChange}
                      />
                      more than 22
                    </label>
                    <div className="my-2">Selected age: {age}</div>
                  </div>
                  {ageError && <div style={{ color: "red" }}>{ageError}</div>}
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
                    {favoritePersonError && (
                      <div style={{ color: "red" }}>{favoritePersonError}</div>
                    )}
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
                    {feelingError && (
                      <div style={{ color: "red" }}>{feelingError}</div>
                    )}
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
                    </div>{" "}
                    {isSadError && (
                      <div style={{ color: "red" }}>{isSadError}</div>
                    )}
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
                    </div>{" "}
                    {lostInterestError && (
                      <div style={{ color: "red" }}>{lostInterestError}</div>
                    )}
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
                    {restlessError && (
                      <div style={{ color: "red" }}>{restlessError}</div>
                    )}
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
                    {supportError && (
                      <div style={{ color: "red" }}>{supportError}</div>
                    )}
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
