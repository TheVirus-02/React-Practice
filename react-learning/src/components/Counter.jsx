import { useState } from "react";

function Counter() {

   const [count, setCount] = useState(0);
   const [name, setName]  = useState("Rahul");

    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    function handleReset() {
        setCount(0);
    }
    function handleNameChange(){
        setName("RT");
    }

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={handleIncrement}>
                +
            </button>
            AND
            <button onClick={handleDecrement}>
                -
            </button> AND
             <button onClick={handleReset}>
                Reset
            </button>

            <hr />
            <h2>Name : {name}</h2>
            
            <button onClick={handleNameChange}>
                Change the Name
            </button>
        </div>
    );
}

export default Counter;