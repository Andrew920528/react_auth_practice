import React, { useState } from "react";
import PopUpWindow from "../PopUpWindow";
import { RxCrossCircled } from "react-icons/rx";

const RoomInfo = () => {
  const headers = ["Status", "Room Name", "Informed Sensor", "Offline Sensor"];
  const rooms = [
    {
      status: "Normal",
      roomName: "Male Toilet",
      informedSensor: "0",
      offlineSensor: "0",
    },
    {
      status: "Inform",
      roomName: "Female Toilet",
      informedSensor: "1",
      offlineSensor: "0",
    },
    {
      status: "Inform",
      roomName: "Office Male Toilet",
      informedSensor: "2",
      offlineSensor: "0",
    },
    {
      status: "Inform",
      roomName: "3F Male Toilet",
      informedSensor: "1",
      offlineSensor: "0",
    },
    {
      status: "Offline",
      roomName: "1F Female Toilet",
      informedSensor: "0",
      offlineSensor: "2",
    },
  ];
  const colorCoverter = {
    Normal: "#48bf91",
    Inform: "#ffe35f",
    Offline: "#ff7457",
  };

  const [selectedRoom, setSelectedRoom] = useState(-1);

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
                  .splice(1, Object.keys(element).length - 1)
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
        width={40}
        height={40}
        padding={"10px"}
        switchOn={selectedRoom >= 0 && selectedRoom < rooms.length}
      >
        <div className="cardContent">
          <div className="topRow">
            <h2>
              {selectedRoom >= 0 &&
                selectedRoom < rooms.length &&
                rooms[selectedRoom].roomName}
            </h2>

            <RxCrossCircled
              className="closeBtn"
              onClick={() => {
                setSelectedRoom(-1);
              }}
            ></RxCrossCircled>
          </div>
        </div>
      </PopUpWindow>
    </div>
  );
};

export default RoomInfo;
