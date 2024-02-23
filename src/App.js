// import "./App.css";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import AlbumFeatures from "./features/Album";
import TodoFeatures from "./features/Todo";

function App() {
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos">Todo</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album</NavLink>
      </p>
      <Routes>
        <Route path="/" Component={TodoFeatures} />
        <Route path="/todos" Component={TodoFeatures} />
        <Route path="/albums" Component={AlbumFeatures} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
