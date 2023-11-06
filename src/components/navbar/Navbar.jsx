import { Link } from "react-router-dom";
import "./navbar.scss";
import logo from "/images/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, sethamburger] = useState(false);

  const [links, setlinks] = useState("hidden");

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`link ${links}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#New">New</a>
            </li>
            <li>
              <a href="#popular">Popular</a>
            </li>
            <li>
              <a href="#trending">Trending</a>
            </li>
            <li>
              <a href="#Category">Category</a>
            </li>
          </ul>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            !hamburger ? sethamburger(true) : sethamburger(false);

            hamburger ? setlinks("show") : setlinks("");
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
