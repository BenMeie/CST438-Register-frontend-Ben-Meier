function AssignmentForm(props) {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div className="assignmentFormInput">
                    <label>Course ID<input type="number" value={props.courseId} onChange={(e) => {props.setCourseID(e.target.value)}}></input></label>
                </div>
                <div className="assignmentFormInput">
                    <label>Name<input type="text" defaultValue={props.name} onChange={(e) => {props.setName(e.target.value)}}></input></label>
                </div>
                <div className="assignmentFormInput">
                    <label>Due Date<input type="date" defaultValue={props.dueDate} onChange={(e) => {props.setDueDate(e.target.value)}}></input></label>
                </div>
                <button className="genericButton">Submit</button>
            </form>
        </>
    )
}

export default AssignmentForm