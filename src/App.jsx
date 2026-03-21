import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ index: true, element: <Home /> }]
  }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
