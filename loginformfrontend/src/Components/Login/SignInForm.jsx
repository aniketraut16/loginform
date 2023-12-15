import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signinform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedpassword, setconfirmedPassword] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [message, setMessage] = useState("");
  const [alertMsg, setAlertMsg] = useState("success");
  const [isPasswordVisible, setisPasswordVisible] = useState(true);
  const [isConfiremedPasswordVisible, setisConfiremedPasswordVisible] =
    useState(true);
  const navigate = useNavigate();
  // Handle form input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setconfirmedPassword(e.target.value);
  };

  const setPasswordVisibility = () => {
    if (isPasswordVisible) {
      setisPasswordVisible(false);
    } else {
      setisPasswordVisible(true);
    }
  };
  const setConfiremedPasswordVisibility = () => {
    if (isConfiremedPasswordVisible) {
      setisConfiremedPasswordVisible(false);
    } else {
      setisConfiremedPasswordVisible(true);
    }
  };

  // Function to reset the form state
  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setconfirmedPassword("");
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (password !== "" && email !== "" && name !== "") {
      if (password === confirmedpassword) {
        const data = {
          name,
          email,
          password,
        };
        axios
          .post("http://localhost:8000/signin", data)
          .then((response) => {
            setMessage(response.data.message);
            setAlertMsg(response.data.alertMsg);
            setIsCreated(true);
            setTimeout(() => {
              if (message === "Login data saved successfully") {
                navigate("/home");
              }
              setIsCreated(false);
            }, 1500);
          })
          .catch((error) => {
            console.error("Error:", error);
            setMessage("Internal error occurred!!");
            setAlertMsg("danger");
            setIsCreated(true);
          });
      } else {
        setAlertMsg("warning");
        setMessage("Password is not matching with confirm Password!!");
        setIsCreated(true);
        setTimeout(() => {
          setIsCreated(false);
        }, 1500);
      }
    } else {
      setAlertMsg("warning");
      setMessage("Please provide all required fields");
      setIsCreated(true);
      setTimeout(() => {
        setIsCreated(false);
      }, 1500);
    }
  };

  // Render the component
  return (
    <>
      {isCreated && (
        <div className={`alert alert-${alertMsg}`} role="alert">
          {message}
        </div>
      )}
      <div className="backgroundContainer">
        {Array.from({ length: 1200 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="signinform">
        <h1>SignUp Form</h1>
        <label htmlFor="name">Enter Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          autoComplete="off"
        />
        <label htmlFor="email">Enter Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="off"
        />
        <label htmlFor="password">Enter Password</label>
        <div>
          <input
            type={isPasswordVisible ? "password" : "text"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
          />

          {isPasswordVisible ? (
            <i class="fa-solid fa-eye" onClick={setPasswordVisibility}></i>
          ) : (
            <i
              class="fa-solid fa-eye-slash"
              onClick={setPasswordVisibility}
            ></i>
          )}
        </div>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <div>
          <input
            type={isConfiremedPasswordVisible ? "password" : "text"}
            id="confirmpassword"
            value={confirmedpassword}
            onChange={handleConfirmPasswordChange}
            autoComplete="off"
          />
          {isConfiremedPasswordVisible ? (
            <i
              class="fa-solid fa-eye"
              onClick={setConfiremedPasswordVisibility}
            ></i>
          ) : (
            <i
              class="fa-solid fa-eye-slash"
              onClick={setConfiremedPasswordVisibility}
            ></i>
          )}
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <p>
          Already have account?{" "}
          <Link className="link" to="/login">
            {" "}
            Login{" "}
          </Link>
        </p>
      </div>
    </>
  );
}

export default Signinform;
