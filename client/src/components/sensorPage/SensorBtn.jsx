import React, { useState } from "react";

const SensorBtn = ({ sensor, setSelectedSensor }) => {
  const colorCoverter = {
    Normal: "#48bf91",
    Warning: "#ffe35f",
    Offline: "#ff7457",
  };
  return (
    <div
      className="sensorBtn"
      style={{ backgroundColor: colorCoverter[sensor.status] }}
      onClick={() => setSelectedSensor(sensor)}
    >
      {"Sensor " + sensor.id} <br />
    </div>
  );
};

export default SensorBtn;
