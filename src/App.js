import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes from react-router-dom
import Sidebar from "./components/Sidebar";
import Dashboard from "./views/Dashboard";
import CalendarView from "./views/CalendarView";
import WalletView from "./views/WalletView";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/WalletView" element={<WalletView />} />
        <Route path="/CalendarView" element={<CalendarView />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
