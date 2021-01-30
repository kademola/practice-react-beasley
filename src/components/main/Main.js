import React, { Component } from "react";
import AttendeeList from "../attendee-list/AttendeeList";
import SignUpForm from "../signupform/SignUpForm";

import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
    };
  }

  addAttendee = (attendee) => {
    this.setState((state, props) => ({
      attendees: [...state.attendees, attendee],
    }));
  };

  render() {
    return (
      <div className="Main">
        <h3>Album release party</h3>

        <p>
          We hope to see <em>you</em> <strong>October 13</strong>!
        </p>

        <SignUpForm addAttendee={this.addAttendee} />

        <h1 class="dark">Pre-order now!</h1>
        <p class="dark">The cool kids will all be there</p>

        <AttendeeList attendees={this.state.attendees} />
      </div>
    );
  }
}

export default Main;
