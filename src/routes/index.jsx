import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App />, children: [] },
]);

const RProvider = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default RProvider;
