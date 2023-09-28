import Assignment from "./Assignment";

function AssignmentTable(props) {
    return (
        <div className="assignmentWrapper">
               {props.assignments.map((assignment, i) => (
                 <Assignment assignment={assignment} />
               ))}
        </div>
    )
}

export default AssignmentTable