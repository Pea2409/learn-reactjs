import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

TodoFeatures.propTypes = {};

function TodoFeatures(props) {
  return (
    <div>
      <Routes>
        <Route path="/todos" Component={ListPage}></Route>
        <Route path="/todos/:todoID" Component={DetailPage}></Route>
      </Routes>
    </div>
  );
}

export default TodoFeatures;
