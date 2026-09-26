function ClickButton() {

    function handleClick(event) {
        console.log("Button clicked!");
        console.log(event);
    }

    function greet(name){
        console.log(`Hello, ${name}!`);
    }
    return (
        <div>
        <button onClick={handleClick}>
            Click Me
        </button> <br />
        
        <button onClick = {() => greet("Rahul")}>
            Greet Me
        </button>
        </div>
    );
}

export default ClickButton;