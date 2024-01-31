import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          ::selection {
            color: #000;
            background: #fff;
          }

          nav {
            position: fixed;
            background: #1b1b1b;
            width: 100%;
            padding: 10px 0;
            z-index: 12;
          }

          nav .menu {
            max-width: 1250px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
          }

          .menu .logo a {
            text-decoration: none;
            color: #fff;
            font-size: 35px;
            font-weight: 600;
          }

          .menu ul {
            display: inline-flex;
          }

          .menu ul li {
            list-style: none;
            margin-left: 7px;
          }

          .menu ul li:first-child {
            margin-left: 0px;
          }

          .menu ul li a {
            text-decoration: none;
            color: #fff;
            font-size: 18px;
            font-weight: 500;
            padding: 8px 15px;
            border-radius: 5px;
            transition: all 0.3s ease;
          }

          .menu ul li a:hover {
            background: #fff;
            color: black;
          }

          .img {
            width: 100%;
            height: 100vh;
            background-size: cover;
            background-position: center;
            position: relative;
          }

          .img::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.4);
          }

          .center {
            position: absolute;
            top: 52%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            padding: 0 20px;
            text-align: center;
          }

          .center .title {
            color: #fff;
            font-size: 55px;
            font-weight: 600;
          }

          .center .sub_title {
            color: #fff;
            font-size: 52px;
            font-weight: 600;
          }

          .center .btns {
            margin-top: 20px;
          }

          .center .btns button {
            height: 55px;
            width: 170px;
            border-radius: 5px;
            border: none;
            margin: 0 10px;
            border: 2px solid white;
            font-size: 20px;
            font-weight: 500;
            padding: 0 10px;
            cursor: pointer;
            outline: none;
            transition: all 0.3s ease;
          }

          .center .btns button:first-child {
            color: #fff;
            background: none;
          }

          .btns button:first-child:hover {
            background: white;
            color: black;
          }

          .center .btns button:last-child {
            background: white;
            color: black;
          }
        `}
      </style>

      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">My Projects</a>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="img" />
      <div className="center">
        <div className="title">Website Home Page</div>
        <div className="sub_title">Its a sample page</div>
        <div className="btns">
          <button>Learn More</button>
          <button>Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Home;
