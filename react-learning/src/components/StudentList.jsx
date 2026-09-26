import StudentCard  from "./StudentCard";

function StudentList(){
    const students = [
    {
        id: 1,
        name: "Rahul",
        age: 21,
        city: "Mumbai"
    },
    {
        id: 2,
        name: "Amit",
        age: 22,
        city: "Delhi"
    },
    {
        id: 3,
        name: "Priya",
        age: 20,
        city: "Pune"
    }
];
return (
    <div>
        <h2>Student List</h2>
          {
           students.map((student) => (
                <StudentCard 
                key = {student.id}
                name = {student.name}
                age = {student.age}
                city = {student.city} />
            )) 
        }
    </div>
)

}

export default StudentList;