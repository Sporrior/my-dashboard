import React from "react";
import "../css/Calendar.css"; // Import your CSS file

const Calendar = () => {
  return (
    <div className="calendar">
      {/* <div className="time-axis">
        <div className="time-marker">8 PM</div>
        <div className="time-marker">7 PM</div>
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
        <div className="time-marker">7 PM</div>
        <div className="time-marker">8 PM</div>
      </div> */}

      <div className="days">
        <div className="day">
          <div className="dateMon">Mon</div>
          <div className="events">
            <div className="event">
              <p className="title">Meeting</p>
              <p className="time">9 AM - 10 AM</p>
            </div>
            <div className="event">
              <p className="title">Team brainstorming</p>
              <p className="time">11 AM - 12 PM</p>
            </div>
            <div className="event">
              <p className="title">Lunch break</p>
              <p className="time">12 PM - 1 PM</p>
            </div>
            <div className="event">
              <p className="title">Client presentation</p>
              <p className="time">3 PM - 4 PM</p>
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
              <p className="title">Client meetings</p>
              <p className="time">9 AM - 12 PM</p>
            </div>
            <div className="event">
              <p className="title">Lunch break</p>
              <p className="time">12 PM - 1 PM</p>
            </div>
            <div className="event">
              <p className="title">Training session</p>
              <p className="time">2 PM - 4 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateThur">Thur</div>
          <div className="events">
            <div className="event">
              <p className="title">Project review</p>
              <p className="time">10 AM - 12 PM</p>
            </div>
            <div className="event">
              <p className="title">Coffee break</p>
              <p className="time">3 PM - 3:15 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateFri">Fri</div>
          <div className="events">
            <div className="event">
              <p className="title">Team building activities</p>
              <p className="time">9 AM - 12 PM</p>
            </div>
            <div className="event">
              <p className="title">Lunch break</p>
              <p className="time">12 PM - 1 PM</p>
            </div>
            <div className="event">
              <p className="title">Project planning</p>
              <p className="time">2 PM - 4 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateSat">Sat</div>
          <div className="events">
            <div className="event">
              <p className="title">Workshop</p>
              <p className="time">10 AM - 12 PM</p>
            </div>
            <div className="event">
              <p className="title">Lunch break</p>
              <p className="time">12 PM - 1 PM</p>
            </div>
            <div className="event">
              <p className="title">Networking event</p>
              <p className="time">2 PM - 4 PM</p>
            </div>
          </div>
        </div>
        <div className="day">
          <div className="dateSun">Sun</div>
          <div className="events">
            <div className="event">
              <p className="title">Personal development</p>
              <p className="time">10 AM - 12 PM</p>
            </div>
            <div className="event">
              <p className="title">Brunch with colleagues</p>
              <p className="time">12 PM - 1 PM</p>
            </div>
            <div className="event">
              <p className="title">Relaxation time</p>
              <p className="time">3 PM - 5 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
