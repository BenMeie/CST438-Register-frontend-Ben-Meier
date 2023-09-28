import Assignment from "./Assignment";

function AssignmentTable(props) {
    return (
        <div className="assignmentWrapper">
               {props.assignments.map((assignment, i) => (
                 <Assignment assignment={assignment} deleteAssignment={props.deleteAssignment} key={assignment.id} />
               ))}
        </div>
    )
}

export default AssignmentTable