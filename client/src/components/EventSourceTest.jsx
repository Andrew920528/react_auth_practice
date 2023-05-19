import React, { useEffect, useState } from "react";
import SensorBtn from "./sensorPage/SensorBtn";
import SensorInfo from "./sensorPage/SensorInfo";
import { format } from "date-fns";

const EventSourceTest = () => {
  const [sensors, setSensors] = useState([]);
  const [selectedSensor, setSelectedSensor] = useState(null);

  function handleMessageChange(message) {
    if (!message) return;
    let temp = [...sensors];
    console.log("temp", temp);
    if (message.operation === "add") {
      let obj = {};
      obj.id = message.id;
      obj.type = message.type;
      obj.status = message.status;
      obj.lastUpdate = new Date();

      temp.push(obj);
      console.log("temp", temp);
      setSensors(temp);
      return;
    } else if (message.operation === "update") {
      for (let i in temp) {
        if (temp[i].id === message.id) {
          temp[i].type = message.type;
          temp[i].status = message.status;
          temp[i].lastUpdate = new Date();
          setSensors(temp);
          break;
        }
      }

      return;
    } else if (message.operation === "delete") {
      const id = message.id;

      for (let i in temp) {
        if (temp[i].id === id) {
          temp.splice(i, 1);
          setSensors(temp);
          break;
        }
      }
      return;
    }
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
  }, [sensors]);

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
              <div key={"sensorRow" + ind} className="sensorRow">
                <div className="property status">
                  <SensorBtn
                    // key={"btn" + ind}
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
