import { Link } from "react-router-dom"
import Assignment from "./Assignment"

function Assignments(props) {
    return (
        <div>
            {(props.canModify && (
                <a href='./createAssignment'>Create Assignment</a>
            ))}
            {props.assignments.map(assignment => <Assignment data={assignment} /> )}
        </div>
    )
}

export default Assignments
