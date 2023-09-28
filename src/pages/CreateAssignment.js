import { useState } from "react"
import fetch from "node-fetch"

import AssignmentForm from "../components/AssignmentForm"
import { useNavigate } from "react-router-dom"
import Menu from "../components/Menu"

function CreateAssignment() {

    const [ courseID, setCourseID ] = useState(0)
    const [ name, setName ] = useState("")
    const [ dueDate, setDueDate ] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        fetch("http://localhost:8081/assignment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                courseId: courseID,
                assignmentName: name,
                dueDate: dueDate
            })
        }).then(() => {
            navigate(-2)
        })
    }

    return (
        <>
            <Menu />
            <div className="assignmentForm">
                <h3>Create Assignment</h3>
                <AssignmentForm handleSubmit={handleSubmit} setCourseID={setCourseID} courseId={courseID} setName={setName} name={name} setDueDate={setDueDate} dueDate={dueDate} />
            </div>
        </>
        
    )
}

export default CreateAssignment