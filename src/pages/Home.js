import { useState } from 'react';
import Assignments from '../components/Assignments';
import Menu from '../components/Menu';
import '../styles/global.css';

async function getAssignments() {
  // let response = await fetch('http://localhost:8081/assignment');
  // let data = await response.json();
  // console.log(data)
}

function Home() {
  // const [assignments, setAssignments] = useState([]);
  let assignments = []
  getAssignments();

  return (
    <>
      <Menu currentPage='Home'></Menu>
      <Assignments assignments={assignments} canModify={true}></Assignments>
    </>
  );
}

export default Home;
