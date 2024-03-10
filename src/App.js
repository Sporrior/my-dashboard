import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { useUser } from "./contexts/Users"; // Import the useUser hook
import "./App.css";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useUser(); // Use the useUser hook to access user information

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <Router>
      <div className="App">
        <button className="nav-toggle" onClick={toggleNav}>
          {isNavOpen ? "Close" : "Menu"}
        </button>
        <nav className={`mainNavigation ${isNavOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-user-info">
              <img src={user.avatarUrl} alt="Profile" className="nav-avatar" />
              <span>Welcome, {user.name}</span>
            </li>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
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
