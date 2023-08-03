import css from"../Preparing/Preparing.module.css";
import courseImage from "../../../assets/5353134.jpg";
import icseImage from "../../../assets/icse.jpg";
import wbseImage from "../../../assets/wbbse.png";
import jeeImage from "../../../assets/jee.png";
import kvpyImage from "../../../assets/kvpy.png";

import { BiRupee } from 'react-icons/bi';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Preparing = () => {
	return (
		<div className={css.preparingContainer}>
			<h2>I am Preparing For</h2>
			<p>We have a variety of courses to choose from</p>
			<div className={css.courseContainer}>
				<input type="radio" name="slider" id={css.cbse} defaultChecked />
				<input type="radio" name="slider" id={css.icse} />
				<input type="radio" name="slider" id={css.wbse} />
				<input type="radio" name="slider" id={css.jeeNeet} />
				{/* <input type="radio" name="slider" id="kvpy" /> */}

				<nav>
					<label htmlFor={css.cbse} className={css.cbse}>
						CBSE
					</label>
					<label htmlFor={css.icse} className={css.icse}>
						ICSE/ISC
					</label>
					<label htmlFor={css.wbse} className={css.wbse}>
						WBSSE/WBCHSE
					</label>
					<label htmlFor={css.jeeNeet} className={css.jeeNeet}>
						JEE/NEET
					</label>
					{/* <label htmlFor="kvpy" className="kvpy">
						KVPY
					</label> */}
				</nav>

				<section>
				{/* CBSE */}
					<div className={`${css.courseContent} ${css.cbse}`}>
						<img src={courseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete Course for Class VI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.cbse}`}>
						<img src={courseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete Course for Class VII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.cbse}`}>
						<img src={courseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete Course for Class VIII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.cbse}`}>
						<img src={courseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete Course for Class IX</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.cbse}`}>
						<img src={courseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete Course for Class X</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.cbse}`}>
						<img src={courseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete Course for Class XI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.cbse}`}>
						<img src={courseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete Course for Class XII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.icse}`}>
						<img src={icseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete CISCE Course for Class VI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.icse}`}>
						<img src={icseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete CISCE Course for Class VII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.icse}`}>
						<img src={icseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete CISCE Course for Class VII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.icse}`}>
						<img src={icseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete CISCE Course for Class IX</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.icse}`}>
						<img src={icseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete CISCE Course for Class X</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.icse}`}>
						<img src={icseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete CISCE Course for Class XI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.icse}`}>
						<img src={icseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete CISCE Course for Class XII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.wbse}`}>
						<img src={wbseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete WBBSE Course for Class VI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.wbse}`}>
						<img src={wbseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete WBBSE Course for Class VII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.wbse}`}>
						<img src={wbseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete WBBSE Course for Class VIII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.wbse}`}>
						<img src={wbseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete WBBSE Course for Class IX</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.wbse}`}>
						<img src={wbseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete WBBSE Course for Class X</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.wbse}`}>
						<img src={wbseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete WBBSE Course for Class XI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.wbse}`}>
						<img src={wbseImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete WBBSE Course for Class XII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>

					<div className={`${css.courseContent} ${css.jeeNeet}`}>
						<img src={jeeImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete JEE Course for Class XI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.jeeNeet}`}>
						<img src={jeeImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete JEE Course for Class XII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.jeeNeet}`}>
						<img src={jeeImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete NEET Course for Class XI</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className={`${css.courseContent} ${css.jeeNeet}`}>
						<img src={jeeImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete NEET Course for Class XII</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					{/* KVPY */}
					{/* <div className="courseContent kvpy">
						<img src={kvpyImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete KVPY Course for Class IX</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent kvpy">
						<img src={kvpyImage} alt="courseImage" />
						<div className={css.dataSection}>
							<h2>Complete KVPY Course for Class X</h2>
							<div className={css.detailSection}>
                                <div className={css.ratingSection}>
                                    <p className={css.ratingValue}>4.9</p>
                                    <div className={css.stars}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className={css.durationSection}>
                                    <AiFillClockCircle />
                                    <p className={css.durationValue}>73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className={css.priceSection}>
								<div className={css.priceValue}>
									<div className={css.currentPrice}>
										<BiRupee className={css.priceIcon} />
										<div className={css.currentPriceValue}>499</div>
									</div>
                                    <div className={css.oldPrice}>
                                    <BiRupee className={css.priceIcon} />
										<div className={css.oldPriceValue}>799</div>
                                    </div>
								</div>
                                <Link to="/"><button className={css.buyNowButton}>Buy Now</button></Link>
							</div>
						</div>
					</div> */}
				</section>
			</div>
		</div>
	);
};

export default Preparing;
