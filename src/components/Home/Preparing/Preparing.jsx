import "./Preparing.css";
import courseImage from "../../../assets/5353134.jpg";
import icseImage from "../../../assets/icse.jpg";
import wbseImage from "../../../assets/wbbse.png";
import jeeImage from "../../../assets/jee.png";
import kvpyImage from "../../../assets/kvpy.png";

import { BiRupee } from 'react-icons/bi';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Preparing = () => {
	return (
		<div className="preparingContainer">
			<h2>I am Preparing For</h2>
			<p>We have a variety of courses to choose from</p>
			<div className="courseContainer">
				<input type="radio" name="slider" id="cbse" defaultChecked />
				<input type="radio" name="slider" id="icse" />
				<input type="radio" name="slider" id="wbse" />
				<input type="radio" name="slider" id="jee_neet" />
				{/* <input type="radio" name="slider" id="kvpy" /> */}

				<nav>
					<label htmlFor="cbse" className="cbse">
						CBSE
					</label>
					<label htmlFor="icse" className="icse">
						ICSE/ISC
					</label>
					<label htmlFor="wbse" className="wbse">
						WBSSE/WBCHSE
					</label>
					<label htmlFor="jee_neet" className="jee_neet">
						JEE/NEET
					</label>
					{/* <label htmlFor="kvpy" className="kvpy">
						KVPY
					</label> */}
				</nav>

				<section>
				{/* CBSE */}
					<div className="courseContent cbse">
						<img src={courseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete Course for Class VI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent cbse">
						<img src={courseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete Course for Class VII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent cbse">
						<img src={courseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete Course for Class VIII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent cbse">
						<img src={courseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete Course for Class IX</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent cbse">
						<img src={courseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete Course for Class X</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent cbse">
						<img src={courseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete Course for Class XI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent cbse">
						<img src={courseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete Course for Class XII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent icse">
						<img src={icseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete CISCE Course for Class VI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent icse">
						<img src={icseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete CISCE Course for Class VII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent icse">
						<img src={icseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete CISCE Course for Class VII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent icse">
						<img src={icseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete CISCE Course for Class IX</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent icse">
						<img src={icseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete CISCE Course for Class X</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent icse">
						<img src={icseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete CISCE Course for Class XI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent icse">
						<img src={icseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete CISCE Course for Class XII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent wbse">
						<img src={wbseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete WBBSE Course for Class VI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent wbse">
						<img src={wbseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete WBBSE Course for Class VII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent wbse">
						<img src={wbseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete WBBSE Course for Class VIII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent wbse">
						<img src={wbseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete WBBSE Course for Class IX</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent wbse">
						<img src={wbseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete WBBSE Course for Class X</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent wbse">
						<img src={wbseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete WBBSE Course for Class XI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent wbse">
						<img src={wbseImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete WBBSE Course for Class XII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>

					<div className="courseContent jee_neet">
						<img src={jeeImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete JEE Course for Class XI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent jee_neet">
						<img src={jeeImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete JEE Course for Class XII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent jee_neet">
						<img src={jeeImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete NEET Course for Class XI</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent jee_neet">
						<img src={jeeImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete NEET Course for Class XII</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					{/* KVPY */}
					{/* <div className="courseContent kvpy">
						<img src={kvpyImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete KVPY Course for Class IX</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div>
					<div className="courseContent kvpy">
						<img src={kvpyImage} alt="courseImage" />
						<div className="dataSection">
							<h2>Complete KVPY Course for Class X</h2>
							<div className="detailSection">
                                <div className="ratingSection">
                                    <p className="ratingValue">4.9</p>
                                    <div className="stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className="durationSection">
                                    <AiFillClockCircle />
                                    <p className="durationValue">73.2h</p>
                                </div>
                            </div>
							<hr />
							<div className="priceSection">
								<div className="priceValue">
									<div className="currentPrice">
										<BiRupee className="priceIcon" />
										<div className="currentPriceValue">499</div>
									</div>
                                    <div className="oldPrice">
                                    <BiRupee className="priceIcon" />
										<div className="oldPriceValue">799</div>
                                    </div>
								</div>
                                <Link to="/"><button className="buyNowButton">Buy Now</button></Link>
							</div>
						</div>
					</div> */}
				</section>
			</div>
		</div>
	);
};

export default Preparing;
