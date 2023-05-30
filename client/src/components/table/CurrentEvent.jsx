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
      room: "hi",
      sensor: "hi",
      message: "hi",
      lastUpdate: "hihihihih ihihiih",
      lastCheckIn: "hi",
      performance: "hi",
    },
    {
      room: "hi2",
      sensor: "hi2",
      message: "hi2",
      lastUpdate: "hi2",
      lastCheckIn: "hi2",
      performance: "hi2",
    },
    {
      room: "hi3",
      sensor: "hi3",
      message: "hi3",
      lastUpdate: "hi3",
      lastCheckIn: "hi3",
      performance: "hi3",
    },
    {
      room: "hi4",
      sensor: "hi4",
      message: "hi4",
      lastUpdate: "hi4",
      lastCheckIn: "hi4",
      performance: "hi4",
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
