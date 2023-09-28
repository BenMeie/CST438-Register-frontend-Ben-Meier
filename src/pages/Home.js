import { useEffect, useState } from "react"
import AssignmentTable from "../components/AssignmentTable"
import Menu from "../components/Menu"
import { SERVER_URL } from "../constants"
import fetch from "node-fetch"

function Home() {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
    // called once after intial render
    fetchAssignments();
    })
    
    const fetchAssignments = () => {
        fetch(`${SERVER_URL}/assignment`)
            .then((response) => response.json() ) 
            .then((data) => { 
                console.log("assignment length "+data.length);
                setAssignments(data);
            }) 
        .catch(err => console.error(err)); 
    }

    const deleteAssignment = (id) => {
        fetch(`${SERVER_URL}/assignment/${id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((data) => {
                if(!data) {
                    
                } else {
                    fetchAssignments();
                }
            })
    }

    return (
        <>
            <Menu />
            <AssignmentTable assignments={assignments} deleteAssignment={deleteAssignment} />
        </>
    )
}

export default Home