import React from "react";
import Calendar from "../components/Calendar";
import "../css/CalendarView.css";
import Profile from "../icons/jon-doe.png"

const CalendarView = () => {
  return (
    <div className="CalendarContainer">
      <header className="CalendarHeader">
        <div className="CalendarTitle">Calendar</div>
        <div className="searchBarWrapper">
          <input type="text" className="searchBar" placeholder="Search..." />
        </div>
        <div className="profileDropdown">
          <img
            src={Profile}
            alt="Profile"
            className="profilePic"
          />
        </div>
        <div className="iconsContainer">
          <div className="icon">Messages</div>
          <div className="icon">Mail</div>
        </div>
      </header>
      <Calendar />
    </div>  
  );
};

export default CalendarView;
