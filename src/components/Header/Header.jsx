import { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

const Header = () => {
	

	return (
		<nav className="headerContainer">
      <div className="headerContent">
      <div className="leftSection">
      <div className="imageSection">
        <img src={Logo} alt="" className="imageIcon"/>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <div className="navDivWithIcon">
          <a href="/" className="dropdown">Courses</a>
          <AiOutlineDown className="iconsize"/>
          </div>
          <ul className="primary-dropdown">
            <li>
              <div className="subsection">
                <a href="/">Boards</a>
                <AiOutlineRight className="iconsize"/>
              </div>
              
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
            <div className="subsection">
                <a href="/">Competitive Exams</a>
                <AiOutlineRight className="iconsize"/>
              </div>
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
      <button className="log">Login</button>
    <button className="reg">Sign up</button>
      </div>
      </div>
    </nav>
	);
};

export default Header;
