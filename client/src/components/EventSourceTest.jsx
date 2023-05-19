import React, { useEffect, useState } from "react";
import SensorBtn from "./sensorPage/SensorBtn";
import Sensor from "../models/Sensor";
import SensorInfo from "./sensorPage/SensorInfo";
const EventSourceTest = () => {
  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(null);
  function handleMessageChange(message) {
    console.log("new message", message);
    setSensors(message);
  }
  useEffect(() => {
    console.log("sensors", sensors);
  }, [sensors]);

  // The url we are subscribing to
  const EVENT_URL = "http://localhost:3001/EventSource";
  const USER_ID = "andrew";
  useEffect(() => {
    const sse = new EventSource(EVENT_URL + "?userId=" + USER_ID);

    sse.onmessage = (event) => {
      console.log("event", event);
      let message = JSON.parse(event.data);
      handleMessageChange(message);
    };
    sse.onerror = (e) => {
      console.log("error", e);
      sse.close();
    };

    return () => {
      console.log("close");
      sse.close();
    };
  }, []);

  return (
    <div>
      <div className="sensorPage">
        <div className="title"> Room A sensors</div>
        <div>Number of sensors: {sensors.length}</div>
        <hr />

        <div className="sensors">
          {sensors.map((data, ind) => {
            return (
              <SensorBtn
                key={"btn" + ind}
                sensor={data}
                setSelectedSensor={setSelectedSensor}
              ></SensorBtn>
            );
          })}
        </div>
      </div>
      <SensorInfo
        sensor={selectedSensor}
        setSelectedSensor={setSelectedSensor}
      ></SensorInfo>
    </div>
  );
};

export default EventSourceTest;
