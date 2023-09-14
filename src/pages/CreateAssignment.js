import { useState } from "react";
import Menu from "../components/Menu";

function CreateAssignment() {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleForm = async () => {
        fetch('http://localhost:8081/assignment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                course_id: id,
                dueDate: date
            })
        })
    }

    return (
        <>
        <Menu currentPage='Home'></Menu>
        <div>
            <form onSubmit={handleForm}>
                <label>Assignment Name<input type='text' onChange={(e) => {setName(e.target.value)}}></input></label>
                <label>Course ID<input type='number' onChange={(e) => {setId(e.target.value)}}></input></label>
                <label>Due Date<input type='date' onChange={(e) => {setDate(e.target.value)}}></input></label>
                <button>Create</button>
            </form>
        </div>
        </>
    )
}

export default CreateAssignment;