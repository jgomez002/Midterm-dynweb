import React from "react";
import './App.css';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Choice from "./pages/choice";
import SelectedPlaylist from "./pages/selected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  
  {
    path: "/selection",
    element: <Choice/>,
  }, 
  {
    path: "/selected",
    element: <SelectedPlaylist/>,
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
