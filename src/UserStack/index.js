import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../form/home";
import SimpleForm from "../form/simpleForm";

export const UserRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<SimpleForm />} />
      </Routes>
    </Router>
  );
};
