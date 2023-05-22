import React, { useEffect, useState } from "react";
import SensorBtn from "./sensorPage/SensorBtn";
import SensorInfo from "./sensorPage/SensorInfo";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSensorList,
  addSensorList,
  updateSensorList,
  deleteSensorList,
} from "../features/slices/sensorListSlice";
const EventSourceTest = () => {
  const [selectedSensor, setSelectedSensor] = useState(null);

  const sensorList = useSelector(selectSensorList);
  const dispatch = useDispatch();
  function handleMessageChange(message) {
    if (!message) return;

    if (message.operation === "add") {
      dispatch(addSensorList(message));
      return;
    } else if (message.operation === "update") {
      dispatch(updateSensorList(message));
      return;
    } else if (message.operation === "delete") {
      dispatch(deleteSensorList(message));
      return;
    }
  }

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
  }, []);

  return (
    <div>
      <div className="sensorPage">
        <div className="titles">
          <div className="title"> Room A sensors</div>
          <div className="subtitle">Number of sensors: {sensorList.length}</div>
        </div>

        <hr />

        <div className="sensors">
          <div className="sensorRow">
            <div className="header status">Status</div>
            <div className="header id">Id</div>

            <div className="header">Type</div>
            <div className="header"> Last Updated</div>
          </div>
          {sensorList.map((data, ind) => {
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
