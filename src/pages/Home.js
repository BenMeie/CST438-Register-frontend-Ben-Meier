import { useEffect, useState } from "react"
import AssignmentTable from "../components/AssignmentTable"
import Menu from "../components/Menu"
import { SERVER_URL } from "../constants"
import fetch from "node-fetch"

function Home() {
    const [assignments, setAssignments] = useState([]);

    const token = sessionStorage.getItem("jwt");

    useEffect(() => {
    // called once after intial render
    fetchAssignments();
    }, [])
    
    const fetchAssignments = () => {
        fetch(`${SERVER_URL}/assignment`, {
            headers: {'Authorization' : token}
        })
            .then((response) => response.json() ) 
            .then((data) => {
                setAssignments(data);
            }) 
        .catch(err => console.error(err)); 
    }

    const deleteAssignment = (id, force) => {
        console.log(`Force: ${force}`)
        fetch(`${SERVER_URL}/assignment/${id}?force=${force}`, { method: 'DELETE', headers: {'Authorization' : token} })
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