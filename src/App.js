// import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { useUser } from "./contexts/Users";
import Nav from "./components/Sidebar";
import "./App.css";

const App = () => {
  const { user } = useUser();

  return (
    <Router>
      <div className="App">
        <Nav user={user}/>
        <main className={"main-content"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
