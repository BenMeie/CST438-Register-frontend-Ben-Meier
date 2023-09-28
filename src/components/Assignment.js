import { useState } from "react";
import { Link } from "react-router-dom";

function Assignment(props) {
    let assignment = props.assignment
    let [force, setForce] = useState(false)


    return (
        <div className="assignment">
            <div className="assignmentInfo">
                <div className="assignmentColumn">
                    {assignment.courseId}
                </div>
                <div className="assignmentColumn">
                    {assignment.assignmentName}
                </div>
                <div className="assignmentColumn">
                    {assignment.dueDate}
                </div>
            </div>
            <div className="assignmentActions">
                <Link className="genericButton" to={"/grade-assignment/" + assignment.id}>Grade</Link>
                <Link className="genericButton" to={"/edit-assignment/" + assignment.id}>Edit</Link>
                <button className="deleteButton" onClick={() => props.deleteAssignment(assignment.id, force)}>Delete</button>
                <label>Force?<input type="checkbox" onChange={() => {setForce(!force)}}></input></label>
            </div>
        </div>
    )
}

export default Assignment