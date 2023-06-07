import React from "react";
import DisplayTable from "./DisplayTable";

const CurrentEvent = () => {
  const headers = [
    "Room",
    "Sensor",
    "Message",
    "Last Update",
    "Last Check-in",
    "Performance",
  ];
  // dummy events
  const events = [
    {
      room: "Office Female Room",
      sensor: "B1M01-1st Hand Towel",
      message: "Low Hand Towel",
      lastUpdate: "2023/06/06 09:55:09",
      lastCheckIn: "--",
      performance: "--",
    },
    {
      room: "Office Female Room",
      sensor: "B1M01-3rd Paper Roll",
      message: "Low Paper Roll",
      lastUpdate: "2023/06/05 17:49:09",
      lastCheckIn: "--",
      performance: "--",
    },
    {
      room: "	3F Male Room 01",
      sensor: "3FM01-1st Ammonia",
      message: "Very Smelly",
      lastUpdate: "2023/06/05 11:40:02",
      lastCheckIn: "--",
      performance: "--",
    },
    {
      room: "2F Male Room 01	",
      sensor: "2FM01-1st Soap Dispenser",
      message: "Low Soap",
      lastUpdate: "2023/05/31 13:37:18",
      lastCheckIn: "--",
      performance: "--",
    },
  ];
  return (
    <div className="sectionWrapper">
      <div className="title">Current Events</div>
      <DisplayTable headers={headers} data={events} />
    </div>
  );
};

export default CurrentEvent;
