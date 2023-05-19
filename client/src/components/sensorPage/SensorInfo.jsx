import React, { useState } from "react";
import PromptCard from "../PromptCard";
const SensorInfo = ({ sensor, setSelectedSensor }) => {
  return (
    sensor && (
      <>
        <PromptCard
          id={"insert-card"}
          width={40}
          height={60}
          padding={"10px"}
          promptCardData={sensor}
        >
          <div className="sensorInfo">
            <div className="header">Sensor Info</div>
            <button onClick={() => setSelectedSensor(null)}>Close</button>
            <div className="sensorContent">
              <div className="field">
                Type
                <div>{sensor.type}</div>
              </div>
              <div className="field">
                Status
                <div>{sensor.status}</div>
              </div>
              <div className="field">
                Last update
                <div>{sensor.lastUpdate}</div>
              </div>
            </div>
          </div>
        </PromptCard>
      </>
    )
  );
};

export default SensorInfo;
