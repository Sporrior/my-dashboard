import React from "react";
import "../css/Calender.css"; // Import your CSS file

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="time-axis">
        <div className="time-marker">9 AM</div>
        <div className="time-marker">10 AM</div>
        <div className="time-marker">11 AM</div>
        <div className="time-marker">12 PM</div>
        <div className="time-marker">1 PM</div>
        <div className="time-marker">2 PM</div>
        <div className="time-marker">3 PM</div>
        <div className="time-marker">4 PM</div>
        <div className="time-marker">5 PM</div>
        <div className="time-marker">6 PM</div>
      </div>
      <div className="days">
        <div className="day">
          <div className="dateMon">Mon</div>
          <div className="events">
            <div className="event">
              <p className="title">Securities Regulation</p>
              <p className="time">2 PM - 5 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateTues">Tues</div>
          <div className="events">
            <div className="event">
              <p className="title">Corporate Finance</p>
              <p className="time">10 AM - 12 PM</p>
            </div>
            <div className="event">
              <p className="title">Entertainment Law</p>
              <p className="time">1 PM - 4 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateWed">Wed</div>
          <div className="events">
            <div className="event">
              <p className="title">Securities Regulation</p>
              <p className="time">2 PM - 5 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateThur">Thur</div>
          <div className="events">
            <div className="event">
              <p className="title">Securities Regulation</p>
              <p className="time">2 PM - 5 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateFri">Fri</div>
          <div className="events">
            <div className="event">
              <p className="title">Securities Regulation</p>
              <p className="time">2 PM - 5 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateSat">Sat</div>
          <div className="events">
            <div className="event">
              <p className="title">Securities Regulation</p>
              <p className="time">2 PM - 5 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateSun">Sun</div>
          <div className="events">
            <div className="event">
              <p className="title">Securities Regulation</p>
              <p className="time">2 PM - 5 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
