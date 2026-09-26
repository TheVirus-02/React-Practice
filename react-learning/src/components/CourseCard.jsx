function CourseCard({title, duration, level,index}){

     function handleEnroll() {
        console.log("Enrolled in " + title);
    }


    return (
        <div>
          <hr />
          <h2>Course #{index+1}</h2>
            <p> Title : {title}</p>
            <p> Duration : {duration}</p>
            <p> Level : {level}</p>
           
            <button onClick={handleEnroll}>
                Enroll
            </button>
            <hr />
        </div>
    )

}

export default CourseCard;