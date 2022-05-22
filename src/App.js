import React from "react";
import Items from "./layouts/Items";
import Add from "./layouts/Add";
import Edit from "./layouts/Edit";
import NotFound from "./layouts/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Items />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}
