import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import fetch from "node-fetch"

import AssignmentForm from "../components/AssignmentForm"
import { SERVER_URL } from "../constants"
import Menu from "../components/Menu"

function EditAssignment() {
    const [ courseID, setCourseID ] = useState(0)
    const [ name, setName ] = useState("")
    const [ dueDate, setDueDate ] = useState("")
    const navigate = useNavigate();
    let assignmentId = 0

    const path = window.location.pathname;  // /assignment/123
    const s = /\d+$/.exec(path)[0];
    assignmentId=s;

    const token = sessionStorage.getItem("jwt");

    useEffect(() => {
        getAssignment();
    })


    const getAssignment = async () => {
        fetch(`${SERVER_URL}/assignment/${assignmentId}`, {
            headers: {'Authorization' : token}
        })
            .then(response => response.json())
            .then(data => {
                setCourseID(data.courseId)
                setName(data.assignmentName)
                setDueDate(data.dueDate)
            })
    }

    const handleSubmit = async (event) => {
        fetch(`http://localhost:8081/assignment/${assignmentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'Authorization' : token
            },
            body: JSON.stringify({
                courseId: courseID,
                assignmentName: name,
                dueDate: dueDate
            })
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <>
        <Menu />
        <div className="assignmentForm">
            <h3>Edit Assignment</h3>
            <AssignmentForm handleSubmit={handleSubmit} setCourseID={setCourseID} courseId={courseID} setName={setName} name={name} setDueDate={setDueDate} dueDate={dueDate} />
        </div>
    </>
        
    )
}

export default EditAssignment