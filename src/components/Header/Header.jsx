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
											<a className="subsection" href="/">
												<span>CBSE</span>
												<AiOutlineRight className="iconsize" />
											</a>
											<ul className="secondary-dropdown">
												<li><a href="#">CLASS VI</a></li>
												<li><a href="#">CLASS VII</a></li>
												<li><a href="#">CLASS VIII</a></li>
												<li><a href="#">CLASS IX</a></li>
												<li><a href="#">CLASS X</a></li>
												<li><a href="#">CLASS XI</a></li>
												<li><a href="#">CLASS XII</a></li>
											</ul>
										</li>
										<li>
											<a className="subsection" href="/">
												<span>ICSE/ISC</span>
												<AiOutlineRight className="iconsize" />
											</a>
											<ul className="secondary-dropdown">
												<li><a href="#">CLASS VI</a></li>
												<li><a href="#">CLASS VII</a></li>
												<li><a href="#">CLASS VIII</a></li>
												<li><a href="#">CLASS IX</a></li>
												<li><a href="#">CLASS X</a></li>
												<li><a href="#">CLASS XI</a></li>
												<li><a href="#">CLASS XII</a></li>
											</ul>
										</li>
										<li>
											<a className="subsection" href="/">
												<span>WBBSE/WBCHSE</span>
												<AiOutlineRight className="iconsize" />
											</a>
											<ul className="secondary-dropdown">
												<li><a href="#">CLASS VI</a></li>
												<li><a href="#">CLASS VII</a></li>
												<li><a href="#">CLASS VIII</a></li>
												<li><a href="#">CLASS IX</a></li>
												<li><a href="#">CLASS X</a></li>
												<li><a href="#">CLASS XI</a></li>
												<li><a href="#">CLASS XII</a></li>
											</ul>
										</li>
										<li>
											<a className="subsection" href="/">
												<span>FOUNDATION</span>
												<AiOutlineRight className="iconsize" />
											</a>
											<ul className="secondary-dropdown">
												<li><a href="#">CLASS IX & X</a></li>
												<li><a href="#">CLASS XI & XII</a></li>
											</ul>
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
											<a className="subsection" href="/">
												<span>JEE</span>
												<AiOutlineRight className="iconsize" />
											</a>
											<ul className="secondary-dropdown">
												<li><a href="#">PHYSICS</a></li>
												<li><a href="#">CHEMISTRY</a></li>
												<li><a href="#">MATHEMATICS</a></li>
											</ul>
										</li>
										<li>
											<a className="subsection" href="/">
												<span>NEET</span>
												<AiOutlineRight className="iconsize" />
											</a>
											<ul className="secondary-dropdown">
												<li><a href="#">PHYSICS</a></li>
												<li><a href="#">CHEMISTRY</a></li>
												<li><a href="#">BIOLOGY</a></li>
											</ul>
										</li>
										<li>
											<a className="subsection" href="/">
												<span>JEE - NEET (JEET)</span>
												<AiOutlineRight className="iconsize" />
											</a>
											<ul className="secondary-dropdown">
												<li><a href="#">PHYSICS</a></li>
												<li><a href="#">CHEMISTRY</a></li>
												<li><a href="#">MATHEMATICS</a></li>
												<li><a href="#">BIOLOGY</a></li>
											</ul>
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
