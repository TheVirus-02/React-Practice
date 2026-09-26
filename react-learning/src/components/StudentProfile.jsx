import {useState, useEffect} from "react";

function StudentProfile({onWelcome}) { 
    
    const [name, setName] = useState("Rahul");
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    function increseCount(){
        setCount(count+1)
    }

    useEffect(() => {
        console.log("Student Component rendered.")
        setTimeout(()=>{
            const data = [
                {"id" : 1,"name" : "Rahul"},
                {"id" : 2,"name" : "RT"}
            ]
            setStudents(data);
            setLoading(false)
        }, 2000);
    },[]);

    useEffect(() =>{
        console.log("Count Changed", count)
    }, [count]) 

 

    return (
   <div>
         <button onClick={onWelcome}>
            Welcome
        </button>

        <div>
            <h2>Name : {name}</h2>
            <button onClick={() => setName("RT")}>
                Change Name
            </button>

{loading ? (
    <p>Loading Students : </p>
): (

students.map((student) =>(
                <p key={student.id}>
                    {student.name}
                </p>
            ))

            
)}


            
        </div>
    <h3>Initial count: {count}</h3>
    <button onClick={increseCount}>
        Increase by 1
    </button>

    </div>
    );
}

export default StudentProfile;