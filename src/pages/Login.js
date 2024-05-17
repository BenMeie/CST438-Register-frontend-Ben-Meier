import React, {useState} from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from './Home';
  import CreateAssignment from './CreateAssignment';
  import GradeAssignment from './GradeAssignment';
  import EditAssignment from './EditAssignment';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create-assignment",
      element: <CreateAssignment />
    },
    {
      path: "/grade-assignment/:assignmentId",
      element: <GradeAssignment />
    },
    {
      path: "/edit-assignment/:assignmentId",
      element: <EditAssignment />
    }
  ]);

function Login() {
    const[user, setUser] = useState({username:'', password:''});
    const[isAuthenticated, setAuth] = useState(false);

    const onChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    }

    const login = () => {
        fetch('http://localhost:8081/login', {
            method:'POST',
            headers: {'Content-Type':'application/json' },
            body: JSON.stringify(user)
        })
        .then(res => { 
            const jwtToken = res.headers.get('Authorization');
            if (jwtToken !== null) {
                sessionStorage.setItem("jwt", jwtToken);
                setAuth(true);
            }
        })
        .catch(err => console.log(err));
    }

    if (isAuthenticated) {
        return <RouterProvider router={router} />;
    } else {
        return (
            <div className="App">
            <table>
            <tbody>
            <tr><td>
            <label htmlFor="username">UserName</label>
            </td><td>
            <input type="text" name="username" value={user.username} onChange={onChange} />
            </td></tr>
            <tr><td>
            <label htmlFor="password">Password</label>
            </td><td>
            <input type="text" name="password" value={user.password} onChange={onChange} />
            </td></tr>
            </tbody>
            </table>
            
            <br/>
            <button id="submit" onClick={login}>Login</button>
                </div>
        );
    }
}
export default Login;