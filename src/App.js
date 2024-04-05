import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { useUser } from "./contexts/Users";
import Nav from "./components/Navbar";
import "./App.css";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useUser();

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <Router>
      <div className="App">
        <button className="nav-toggle" onClick={toggleNav}>
          {isNavOpen ? "Close" : "Menu"}
        </button>
        <Nav user={user} isNavOpen={isNavOpen} /> {/* Add the Nav component */}
        <main className={`main-content ${isNavOpen ? "shrink" : ""}`}>
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
