import { useState } from "react";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./auth/AuthLayout";

//entry app component
function App() {


  return (
    <Routes>
      <Route index element={<Home />} />

      {/* protect route here ?  */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
