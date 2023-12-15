import React from "react";
import Signinform from "./SignInForm";
import Loginform from "./Loginform";
import Home from "../Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Authenticate() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact Component={Signinform} />
          <Route path="/login" exact Component={Loginform} />
          <Route path="/home" exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default Authenticate;
