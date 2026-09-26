function ActionPanel() {

    function sayHello(){
        console.log("hello Rahul")
    }
    function sayGoodbye(){
        console.log("Goodbye Rahul")
    }
    function showName(){
        console.log("My Name is Rahul")
    }
    return (
        <div>
            <button onClick={sayHello}>
                Say Hello
            </button>
            <br />
            <button onClick={sayGoodbye}>
                Say Goodbye
            </button>
            <br />
            <button onClick={showName}>
                Show Name
            </button>
        </div>
    )

}

export default ActionPanel