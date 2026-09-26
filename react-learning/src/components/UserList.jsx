import { useState, useEffect} from "react";

function UserList(){
    const [users , setUsers] = useState([]);
    // 1. Add state for loading and errors
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Loading...")
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                // 2. Check if the response is actually OK (status 200-299)
                if(!response.ok){
                    throw new Error("Failed to fetch users. please try again.");
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setIsLoading(false); // Turn off loading on success
            })
            .catch(err =>{
                setError(err.message); // Save the error message
                setIsLoading(false);  // Turn off loading on failure
            })
    }, []);

    // 3. Early returns for loading and error states
    if (isLoading) {
        return <p>Loading users...</p>
    }

    if(error){
        return 
        <p style={{color : "red"}}>
            Error : {error}
        </p>
    }

    // 4. Render the data if everything was successful
    return (
   
<div>
    <h2>User List</h2>
    {
    users.map((user) => (
                    <p key={user.id}>
                        {user.name}
                    </p>
    ))
}
</div>
    )
}

export default UserList;