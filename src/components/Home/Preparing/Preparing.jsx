import css from "../Preparing/Preparing.module.css";
import { BiRupee } from 'react-icons/bi';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import courseData from "../../../data/courseData";

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
                    {Object.keys(courseData).map((category) => {
                        return courseData[category].data.map((course, index) => {
                            return (
                                <div key={index} className={`${css.courseContent} ${css[courseData[category].className]}`}>
                                    <img src={courseData[category].image} alt="courseImage" />
                                    <div className={css.dataSection}>
                                        <h2>{course.name}</h2>
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
                                                <p className={css.durationValue}>{course.courseDuration}h</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className={css.priceSection}>
                                            <div className={css.priceValue}>
                                                <div className={css.currentPrice}>
                                                    <BiRupee className={css.priceIcon} />
                                                    <div className={css.currentPriceValue}>{course.currentPrice}</div>
                                                </div>
                                                <div className={css.oldPrice}>
                                                    <BiRupee className={css.priceIcon} />
                                                    <div className={css.oldPriceValue}>{course.oldPrice}</div>
                                                </div>
                                            </div>
                                            <Link to={`/course/${course.slug}`}><button className={css.buyNowButton}>Buy Now</button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        });
                    })}
                </section>
            </div>
        </div>
    );
};

export default Preparing;
