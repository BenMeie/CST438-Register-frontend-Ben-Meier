import { useState } from "react"
import fetch from "node-fetch"

function CreateAssignment() {

    const [ courseID, setCourseID ] = useState("")
    const [ name, setName ] = useState("")
    const [ dueDate, setDueDate ] = useState("")

    const handleSubmit = async (event) => {
        fetch("http://localhost:8081/assignment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                course_id: courseID,
                name: name,
                dueDate: dueDate
            })
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Course ID<input type="text" onChange={(e) => {setCourseID(e.target.value)}}></input></label>
                <label>Name<input type="text" onChange={(e) => {setName(e.target.value)}}></input></label>
                <label>Due Date<input type="date" onChange={(e) => {setDueDate(e.target.value)}}></input></label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default CreateAssignment