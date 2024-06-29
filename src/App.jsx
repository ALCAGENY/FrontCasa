import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Vistas/Login/Login";
import { Croquis } from "./Vistas/Croquis/Croquis";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },

  {
    path: '/Croquis',
    element: <Croquis/>
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
