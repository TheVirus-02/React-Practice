import { useState } from "react";

function StudentForm() {

    const [name, setName] = useState("");
    const [age, setAge]  = useState();
    // useState is a React hook that allows you to add state to functional components. In this case, we are using it to manage the state of the "name" variable, which is initialized with the value "Rahul". The setName function is used to update the value of "name" when the input field changes.
    // The handleChange function is called whenever the input field's value changes. It takes the event object as an argument and updates the "name" state with the new value from the input field using setName(event.target.value).
    // The input field is a controlled component, meaning its value is controlled by React state. The value of the input field is set to the "name" state, and the onChange event handler is used to call the handleChange function whenever the user types in the input field.
    // The <p> element below the input field displays the current value of the "name" state, which updates in real-time as the user types in the input field.
    // Overall, this component demonstrates how to use React hooks to manage state and create controlled components in a functional component.
    // The StudentForm component is a simple form that allows users to input their name. It uses the useState hook to manage the state of the name variable, and it updates the state whenever the user types in the input field. The current value of the name state is displayed below the input field in real-time.
    

    function handleChange(event) {
        setName(event.target.value);
    }
    function handleAgeChange(event){
        setAge(event.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted with name:", name, "and age:", age);

        setName("");
        setAge("");
    }

/*

Q)    What is event.preventDefault() ?
Ans - Normally, when an HTML form is submitted, the browser performs its default behavior, which traditionally includes navigating/reloading the page.
In a React application, we usually don't want that.

*/
    return (
        <div>

            <h2>Student Form</h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter your Name here"/>
                <br />
                <input type = "text" value={age} onChange={handleAgeChange} placeholder="Enter your Age here" />
                <p>Name: {name}</p>
                <p>Age : {age}</p>
                <button type = "submit"> Register</button>
            </form>

        </div>
    );

}

export default StudentForm;