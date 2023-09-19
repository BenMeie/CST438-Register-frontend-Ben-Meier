import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import CreateAssignment from './pages/CreateAssignment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-assignment",
    element: <CreateAssignment />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
