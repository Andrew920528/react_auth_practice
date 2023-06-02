import React, { useState } from "react";
import PopUpWindow from "../PopUpWindow";
import { RxCrossCircled } from "react-icons/rx";
import { BsArrowLeftCircle } from "react-icons/bs";
const colorCoverter = {
  Normal: "#48bf91",
  Inform: "#ffe35f",
  Offline: "#ff7457",
};
const RoomInfo = () => {
  const headers = ["Status", "Room Name", "Informed Sensor", "Offline Sensor"];
  // step 1: get list of rooms given building
  // step 2: for each room, get the corresponding sensors
  // step 3: sort the sensors by type
  // step 4: pass into each sensor btn
  const rooms = [
    {
      status: "Normal",
      building: "KingCenter2F",
      currentUsers: 0,
      cumulativeUsers: 50,
      lastCountUpdate: "2023/05/30 15:19:48",
      cameraStatus: "active",
      roomName: "Male Toilet",
      informedSensor: "0",
      offlineSensor: "0",
    },
    {
      status: "Inform",
      building: "KingCenter2F",
      currentUsers: 0,
      cumulativeUsers: 50,
      lastCountUpdate: "2023/05/30 15:19:48",
      cameraStatus: "active",
      roomName: "Female Toilet",
      informedSensor: "1",
      offlineSensor: "0",
    },
    {
      status: "Inform",
      building: "KingCenter2F",
      currentUsers: 0,
      cumulativeUsers: 50,
      lastCountUpdate: "2023/05/30 15:19:48",
      cameraStatus: "active",
      roomName: "Office Male Toilet",
      informedSensor: "2",
      offlineSensor: "0",
    },
    {
      status: "Inform",
      building: "KingCenter2F",
      currentUsers: 0,
      cumulativeUsers: 50,
      lastCountUpdate: "2023/05/30 15:19:48",
      cameraStatus: "active",
      roomName: "3F Male Toilet",
      informedSensor: "1",
      offlineSensor: "0",
    },
    {
      status: "Offline",
      building: "KingCenter2F",
      currentUsers: 0,
      cumulativeUsers: 50,
      lastCountUpdate: "2023/05/30 15:19:48",
      cameraStatus: "active",
      roomName: "1F Female Toilet",
      informedSensor: "0",
      offlineSensor: "2",
    },
  ];

  const toSentenceCase = (camelCase) => {
    if (camelCase) {
      const result = camelCase.replace(/([A-Z])/g, " $1");
      return result[0].toUpperCase() + result.substring(1).toLowerCase();
    }
    return "";
  };

  const [selectedRoom, setSelectedRoom] = useState(-1);
  const [selectedSensor, setSelectedSensor] = useState(null);
  return (
    <div className="sectionWrapper">
      <div className="title">Room Information</div>
      <table className="displayTable interactiveTable">
        <thead>
          <tr>
            {headers.map((element, index) => {
              return <th key={index + "headerEntry"}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rooms.map((element, index) => {
            return (
              <tr
                key={index + "dataEntry"}
                onClick={() => {
                  setSelectedRoom(index);
                }}
              >
                <td>
                  <div
                    className="statusCircle statusInCol"
                    style={{ backgroundColor: colorCoverter[element.status] }}
                  ></div>
                </td>
                {Object.keys(element)
                  .splice(6, Object.keys(element).length - 1)
                  .map((key, i) => (
                    <td key={"data" + i}>{element[key]}</td>
                  ))}
              </tr>
            );
          })}
          <tr>
            <td colSpan={Object.keys(rooms).length}>
              <div className="footer">
                <div className="footerBlock">
                  <div
                    className="statusCircle"
                    style={{ backgroundColor: colorCoverter["Normal"] }}
                  ></div>
                  <div>Normal</div>
                </div>
                <div className="footerBlock">
                  <div
                    className="statusCircle"
                    style={{ backgroundColor: colorCoverter["Inform"] }}
                  ></div>
                  <div>Inform</div>
                </div>
                <div className="footerBlock">
                  <div
                    className="statusCircle"
                    style={{ backgroundColor: colorCoverter["Offline"] }}
                  ></div>
                  <div>Offline</div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <PopUpWindow
        id={"change-pwd-card"}
        width={55}
        height={70}
        minWidth={350}
        switchOn={selectedRoom >= 0 && selectedRoom < rooms.length}
      >
        {selectedRoom >= 0 && selectedRoom < rooms.length && (
          <>
            <div className="topRow cardContent">
              <h2>{rooms[selectedRoom].roomName}</h2>

              <RxCrossCircled
                className="closeBtn"
                onClick={() => {
                  setSelectedRoom(-1);
                }}
              ></RxCrossCircled>
            </div>
            <div className="line"></div>

            <div className="mainContent">
              <div
                className="slider"
                style={
                  selectedSensor
                    ? {
                        transform: "translate(-50%, 0%)",
                      }
                    : {
                        transform: "translate(0%, 0%)",
                      }
                }
              >
                <div className="sliderComponent">
                  {!selectedSensor && (
                    <>
                      <div className="infoBlocks">
                        {Object.keys(rooms[selectedRoom])
                          .splice(1, 5)
                          .map((key, index) => {
                            return (
                              <InfoBlock
                                key={index + "infoBlock"}
                                title={toSentenceCase(key)}
                                value={rooms[selectedRoom][key]}
                              />
                            );
                          })}
                      </div>

                      <SensorBlock
                        title={"Ammonia Sensor"}
                        sensors={["a", "b", "c"]}
                        setSelectedSensor={setSelectedSensor}
                      ></SensorBlock>

                      <SensorBlock
                        title={"Paper Roll Sensor"}
                        sensors={["a", "b"]}
                        setSelectedSensor={setSelectedSensor}
                      ></SensorBlock>

                      <SensorBlock
                        title={"Hand Towel Sensor"}
                        sensors={["a", "b"]}
                        setSelectedSensor={setSelectedSensor}
                      ></SensorBlock>

                      <SensorBlock
                        title={"Soap Sensor"}
                        sensors={[]}
                        setSelectedSensor={setSelectedSensor}
                      ></SensorBlock>

                      <SensorBlock
                        title={"Controller"}
                        sensors={["a"]}
                        setSelectedSensor={setSelectedSensor}
                      ></SensorBlock>
                    </>
                  )}
                </div>

                <div className="sliderComponent">
                  {selectedSensor && (
                    <div className="sensorDetail">
                      <div className="top">
                        <BsArrowLeftCircle
                          onClick={() => {
                            setSelectedSensor(null);
                          }}
                          size={"20px"}
                          className="btn"
                        />
                        <div className="sensorName">
                          {selectedSensor && selectedSensor.sensorName}
                        </div>
                      </div>

                      <div className="sensorInfoRow">
                        {Object.keys(selectedSensor).map((key, i) => (
                          <InfoBlock
                            title={toSentenceCase(key)}
                            value={selectedSensor[key]}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </PopUpWindow>
    </div>
  );
};

const InfoBlock = ({ title, value }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        fontFamily: "montserrat",
      }}
    >
      <div
        style={{
          color: "#686868",
          fontSize: "12px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#000",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        {value}
      </div>
    </div>
  );
};

const SensorBlock = ({ title, sensors, setSelectedSensor }) => {
  const dummySensors = [
    {
      building: "KingCenter2F",
      room: "CBM office",
      sensorId: "SBT-B1-M01-P02B1",
      sensorName: "2F M01 2nd Ammonia",
      sensorType: "paper_roll",
      sensorStatus: "Low Paper Roll",
      status: "Inform",
      message: "--",
      firstAlertTime: "2023/05/30 17:25:47",
      lastStatusChange: "2023/05/31 09:38:51",
    },
    {
      building: "KingCenter2F",
      room: "CBM office",
      sensorId: "SBT-B1-M01-P02B2",
      sensorName: "2F M01 2nd Paper Roll",
      sensorType: "paper_roll",
      sensorStatus: "Low Paper Roll",
      status: "Normal",
      message: "--",
      firstAlertTime: "2023/05/30 17:25:47",
      lastStatusChange: "2023/05/31 09:38:51",
    },
    {
      building: "KingCenter2F",
      room: "CBM office",
      sensorId: "SBT-B1-M01-P02B1",
      sensorName: "2F M01 2nd Soap",
      sensorType: "paper_roll",
      sensorStatus: "Low Paper Roll",
      status: "Offline",
      message: "--",
      firstAlertTime: "2023/05/30 17:25:47",
      lastStatusChange: "2023/05/31 09:38:51",
    },
  ];
  sensors = dummySensors;
  return (
    <div className="sensorBlock">
      <div className="sensorType">{title}</div>
      <div className="sensors">
        {sensors.map((element, index) => {
          return (
            <SensorButton
              key={index + "sensorButton"}
              sensor={element}
              onClick={() => {
                setSelectedSensor(element);
              }}
            ></SensorButton>
          );
        })}
      </div>
    </div>
  );
};

const SensorButton = ({ sensor, onClick }) => {
  return (
    <div className="sensorButton" onClick={onClick}>
      <div
        className="statusCircle"
        style={{ backgroundColor: colorCoverter[sensor.status] }}
      ></div>
      <div className="sensorButtonText">{sensor.sensorName}</div>
    </div>
  );
};

export default RoomInfo;
