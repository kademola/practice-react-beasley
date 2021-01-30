import React from "react";
import Attendee from "../attendee/Attendee";

import "./AttendeeList.css";

function AttendeeList(props) {
  let listItems = props.attendees.map((attendee, i) => (
    <Attendee key={i} attendee={attendee} />
  ));

  return <ul class="AttendeeList">{listItems}</ul>;
}

export default AttendeeList;
