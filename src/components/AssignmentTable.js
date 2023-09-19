import { Link } from "react-router-dom";

function AssignmentTable() {
    return (
        <>
            <Link to="/create-assignment">+</Link>
            <table>
                <tr>
                    <th>Course ID</th>
                    <th>Name</th>
                    <th>Due Date</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Homework 1</td>
                    <td>2023-9-18</td>
                </tr>
            </table>
        </>
    )
}

export default AssignmentTable