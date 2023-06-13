import { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const Header = () => {
	return (
		<nav className="headerContainer">
			<div className="headerContent">
				<div className="leftSection">
					<div className="imageSection">
						<img src={Logo} alt="" className="imageIcon" />
					</div>
				</div>
				<div className="midSection">
					<ul className="nav-links">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<div className="navDivWithIcon">
								<a href="/" className="dropdown">
									Courses
								</a>
								<AiOutlineDown className="iconsize" />
							</div>
							<ul className="primary-dropdown">
								<li>
									<a className="subsection" href="/">
										<span>Boards</span>
										<AiOutlineRight className="iconsize" />
									</a>
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
										<li>
											<a href="/">Foundation</a>
										</li>
									</ul>
								</li>
								<li>
									<a className="subsection" href="/">
										<span>Competitive Exams</span>
										<AiOutlineRight className="iconsize" />
									</a>
									<ul className="secondary-dropdown">
										<li>
											<a href="/">JEE</a>
										</li>
										<li>
											<a href="/">NEET</a>
										</li>
										<li>
											<a href="/">JEE - NEET (JEET)</a>
										</li>
										<li>
											<a href="/">KVPY</a>
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
					<button className="reg">Sign Up</button>
					<button className="log">Login</button>
				</div>
			</div>
		</nav>
	);
};

export default Header;
