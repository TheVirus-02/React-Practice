function InputExample() {

    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <input
            type="text"
            onChange={handleChange}
        />
    );
}

export default InputExample;