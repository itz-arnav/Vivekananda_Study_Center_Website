import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import courseData from "../../data/courseData"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import css from "./Course.module.css"
import Accordion from './Accordion/Accordion';

const Course = () => {

    const { slug } = useParams()
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        let foundData = null;

        for (let key in courseData) {
            if (courseData[key].data.some((course) => course.slug === slug)) {
                foundData = courseData[key].data.find((course) => course.slug === slug);
                break;
            }
        }

        setFetchedData(foundData);
    }, [slug, courseData]);


    if (!fetchedData) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Header />
            <div className={css.courseContainer}>
                <div className={css.courseDescription}>
                    <div className={css.courseTextDetailsContainer}>
                        <div className={css.courseTextDetailsSection}>
                            <h3 className={css.courseTextName}>
                                {fetchedData.name}
                            </h3>
                            <p className={css.courseMockTextPrice}>Special Discounted Price</p>

                            <div className={css.courseTextPriceSection}>
                                <p className={css.courseCurrentPrice}>₹{fetchedData.currentPrice}</p>
                                <p className={css.coursePastPrice}>₹{fetchedData.oldPrice}</p>
                            </div>

                        </div>
                    </div>
                    <div className={css.courseImageDetails}>

                    </div>
                </div>
                <div className={css.batchDetailsSection}>
                    <h3 className={css.batchDetailHeading}>Course Details</h3>

                    <ul className={css.batchDetailsList}>
                        {
                            fetchedData.batchDetails && fetchedData.batchDetails.map(item => (
                                <li className={css.listItemBatchDetails}>{item}</li>
                            ))
                        }
                    </ul>

                    <div className={css.downloadLectureContainer}>
                        <div className={css.downloadLecturePlan}>Download Lecture Plan</div>
                    </div>

                </div>
                <div className={css.faqDetailsSection}>
                    <h3 className={css.faqDetailText}>FAQs (Frequently Asked Questions)</h3>

                    <div className={css.AccordionSection}>
                        <Accordion question="Who should join this course?" answer="This batch is specially designed for students of 11th class. The course is mapped according to the class curriculum. All basic concepts are explained in detail to help students understand them in the simplest way possible." />
                        <Accordion question="When the course will be completed?" answer="Syllabus will end by 31th Oct 2023." />
                        <Accordion question="What is the vailidity of this free course?" answer="Till Exam 2024-25." />
                        <Accordion question="Classes will be live or recorded?" answer="The lectures will be recorded, students can review them until the concepts are clear." />
                        <Accordion question="How can I access the lectures?" answer="Students can access lectures via the mode they enroll. VOD mode users can access the course in Desktop / Laptop. While Mobile Mode users can access the course in Mobile / Tablet Mode. Lectures can be played in Etoosindia Mobile App." />
                        <Accordion question="Does this course cover the entire class syllabus?" answer="Yes, our faculty have covered every chapter and topic in this course respectively." />
                        <Accordion question="How can I clear my subject doubts?" answer="On the doubt panel, you can post questions and get a response within 24 hours from our subject experts." />
                        <Accordion question="How can I contact VSC Support?" answer="VSC Support team is always there for students' help. VSC tries its best to resolve every student query on priority. Students can contact support at the below options:
                    Contact Number: 987654321/40 (09 AM to 06 PM)
                    Email ID: support@vsc.com" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Course
