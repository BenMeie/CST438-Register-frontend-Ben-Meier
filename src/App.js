import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import CreateAssignment from './pages/CreateAssignment';
import GradeAssignment from './pages/GradeAssignment';
import EditAssignment from './pages/EditAssignment';

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

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
