import {useState} from "react";
import CourseCard from "./CourseCard";
function CourseList() {

    // Always explicitly declare your variables, unless you specifically need to reassign the variable.
// const courses = ["React", "Django", "Python", "JavaScript", "HTML", "CSS"];
const courses = [
    {
        id: 1,
        title: "React",
        duration: "3 Months",
        level: "Beginner"
    },
    {
        id: 2,
        title: "Django",
        duration: "2 Months",
        level: "Intermediate"
    }
];


return (

    <div>
        <h2>Course List</h2>
        
            {/* JavaScript inside JSX goes inside {}. */}
            {/* {courses.map((course) => <li key={course}>{course}</li>)} */}
            {/* The key helps React identify which list item corresponds to which item when the list changes. */}
            {courses.length > 0 ?(
            courses.map((course, index) => (
                <CourseCard key = {course.id} 
                title={course.title}
                duration = {course.duration}
                level  = {course.level}
                index = {index}
                />
            ))) : (
                    <p>No Courses Available</p>
            )
        }

    </div>
);


}

export default CourseList;