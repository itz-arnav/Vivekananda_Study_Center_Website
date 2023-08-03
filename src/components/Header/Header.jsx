import { useState } from "react";
import css from"../Header/Header.module.css";
import Logo from "../../assets/logo.png";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className={css.headerContainer}>
			<div className={css.headerContent}>
				<div className={css.leftSection}>
					<div className={css.imageSection}>
						<img src={Logo} alt="" className={css.imageIcon} />
					</div>
				</div>
				<div className={css.midSection}>
					<ul className={css.navLinks}>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<div className={css.navDivWithIcon}>
								<a href="/" className={css.dropdown}>
									Courses
								</a>
								<AiOutlineDown className={css.iconsize} />
							</div>
							<ul className={css.primaryDropdown}>
								<li>
									<a className={css.subsection} href="/">
										<span>Boards</span>
										<AiOutlineRight className={css.iconsize} />
									</a>
									<ul className={css.secondaryDropdown}>
										<li>
											<a className={css.subsection} href="/">
												<span>CBSE</span>
												<AiOutlineRight className={css.iconsize} />
											</a>
											<ul className={css.secondaryDropdown}>
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
											<a className={css.subsection} href="/">
												<span>ICSE/ISC</span>
												<AiOutlineRight className={css.iconsize} />
											</a>
											<ul className={css.secondaryDropdown}>
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
											<a className={css.subsection} href="/">
												<span>WBBSE/WBCHSE</span>
												<AiOutlineRight className={css.iconsize} />
											</a>
											<ul className={css.secondaryDropdown}>
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
											<a className={css.subsection} href="/">
												<span>FOUNDATION</span>
												<AiOutlineRight className={css.iconsize} />
											</a>
											<ul className={css.secondaryDropdown}>
												<li><a href="#">CLASS IX & X</a></li>
												<li><a href="#">CLASS XI & XII</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a className={css.subsection} href="/">
										<span>Competitive Exams</span>
										<AiOutlineRight className={css.iconsize} />
									</a>
									<ul className={css.secondaryDropdown}>
										<li>
											<a className={css.subsection} href="/">
												<span>JEE</span>
												<AiOutlineRight className={css.iconsize} />
											</a>
											<ul className={css.secondaryDropdown}>
												<li><a href="#">PHYSICS</a></li>
												<li><a href="#">CHEMISTRY</a></li>
												<li><a href="#">MATHEMATICS</a></li>
											</ul>
										</li>
										<li>
											<a className={css.subsection} href="/">
												<span>NEET</span>
												<AiOutlineRight className={css.iconsize} />
											</a>
											<ul className={css.secondaryDropdown}>
												<li><a href="#">PHYSICS</a></li>
												<li><a href="#">CHEMISTRY</a></li>
												<li><a href="#">BIOLOGY</a></li>
											</ul>
										</li>
										<li>
											<a className={css.subsection} href="/">
												<span>JEE - NEET (JEET)</span>
												<AiOutlineRight className={css.iconsize} />
											</a>
											<ul className={css.secondaryDropdown}>
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
				<div className={css.signupSection}>
					<Link to="/sign">
						<button className={css.reg}>Sign Up</button>
					</Link>
					<Link to="/sign">
						<button className={css.log}>Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Header;
