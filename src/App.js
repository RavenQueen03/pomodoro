import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from "./HomePage";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />

          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
