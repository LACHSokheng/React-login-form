import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import useToken from "./components/useToken";
import Login from "./components/Login";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const { token, setToken } = useToken;
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
