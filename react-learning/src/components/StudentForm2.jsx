import { useState } from "react";

function StudentForm2() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [course, setCourse] = useState("");

    function handleName(e){
        setName(e.target.value)
    }

    function handleAge(e){
        setAge(e.target.value)
    }

    function handleCity(e){
        setCity(e.target.value)
    }

    function handleCourse(e){
        setCourse(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("Student Registered Successfully!")
        console.log(`Form is Submitted with values :- name : ${name}, age : ${age}, city : ${city}, course : ${course}`)

        setName("")
        setAge("")
        setCity("")
        setCourse("")
    }

    return (
        <div>
            <h2>Student Form2</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Your Name :- </label>
                <input type="text" value={name} placeholder="Write Name" id="name" onChange={handleName} /> <br/> <br/>

                <label htmlFor="age">Enter Your Age :- </label>
                <input type="number" value={age} placeholder="Write Age" id="age"  onChange={handleAge}/> <br/> <br/>

                <label htmlFor="city">Enter Your City :- </label>
                <input type="text" value={city} placeholder="Write City" id="city"  onChange={handleCity}/>  <br/> <br/>

                <label htmlFor="Course">Enter Your Courses :- </label>
                <input type="text" value={course} placeholder="Write Course" id="Course" onChange={handleCourse}/>  <br/> <br/>

                <button type="submit">Submit :-</button>

            </form>
        </div>
        
    )
}

export default StudentForm2