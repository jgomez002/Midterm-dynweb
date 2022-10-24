import React from "react";
import './App.css';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Home from "./pages/home";
import Choice from "./pages/choice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/selection",
    element: <Choice/>,
  }, 
  {
    path: "/home",
    element: <Home/>,
  }, 

]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
