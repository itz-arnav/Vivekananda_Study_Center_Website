import { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
const Header = () => {
	

	return (
		<nav className="headerContainer">
      <div className="headerContent">
      <div className="leftSection">
      <div className="imageSection">
        <img src={Logo} alt="" srcset="" className="imageIcon"/>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/" className="dropdown">Courses v</a>
          <ul className="primary-dropdown">
            <li>
              <a href="/">Boards &gt;</a>
              <ul className="secondary-dropdown">
                <li>
                  <a href="/">CBSE</a>
                </li>
                <li>
                  <a href="/">ICSE/ISC</a>
                </li>
                <li>
                  <a href="/">WBBSE/WBSCHSE</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Competitive Exams &gt;</a>
              <ul className="secondary-dropdown">
                <li>
                  <a href="/">WBJEE</a>
                </li>
                <li>
                  <a href="/">IITJEE</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Study Materials</a>
        </li>
        <li>
          <a href="/">Exams</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
      </ul>
      </div>
      <div className="signupSection">
      <button class="log">Login</button>
    <button class="reg">Sign up</button>
      </div>
      </div>
    </nav>
	);
};

export default Header;
