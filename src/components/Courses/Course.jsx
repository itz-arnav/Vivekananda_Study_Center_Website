import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import courseData from "../../data/courseData"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import css from "./Course.module.css"

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
        console.log("Done")
    }, [slug, courseData]);


    if (!fetchedData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className={css.courseContainer}>
                <div>Course Title {fetchedData.class}</div>
                <div >Course Price {fetchedData.name}</div>
            </div>
            <Footer />
        </>
    )
}

export default Course
