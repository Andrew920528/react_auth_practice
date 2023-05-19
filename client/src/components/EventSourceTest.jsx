import React, { useEffect, useState } from "react";
import SensorBtn from "./sensorPage/SensorBtn";
import Sensor from "../models/Sensor";
import SensorInfo from "./sensorPage/SensorInfo";
import { format } from "date-fns";

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
        <div className="titles">
          <div className="title"> Room A sensors</div>
          <div className="subtitle">Number of sensors: {sensors.length}</div>
        </div>

        <hr />

        <div className="sensors">
          <div className="sensorRow">
            <div className="header status">Status</div>
            <div className="header id">Id</div>

            <div className="header">Type</div>
            <div className="header"> Last Updated</div>
          </div>
          {sensors.map((data, ind) => {
            return (
              <div className="sensorRow">
                <div className="property status">
                  <SensorBtn
                    key={"btn" + ind}
                    sensor={data}
                    setSelectedSensor={setSelectedSensor}
                  ></SensorBtn>
                </div>

                <div className="property id">{data.id}</div>

                <div className="property">{data.type}</div>

                <div className="property">
                  {format(
                    Date.parse(data.lastUpdate),
                    "hh:mm:ss - yyyy/MM/dd (EEE)"
                  )}
                </div>
              </div>
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
