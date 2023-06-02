import React, { useEffect, useRef, useState } from "react";
import "./AddConfig.scss";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import Step from "./Step";
import Dropdown from "../dropdown/Dropdown";
import { RectButton, RectButtonWithIcon } from "../common/Buttons";
import { GrRadialSelected } from "react-icons/gr";
import { IconContext } from "react-icons";
import Header from "../Header";
import {
  BsRecordCircleFill,
  BsFillCircleFill,
  BsCircle,
  BsRecordCircle,
} from "react-icons/bs";
import AddSensorRow from "./AddSensorRow";
const AddConfig = () => {
  const [step, setStep] = useState(0);
  function nextStep() {
    const nextStep = (step + 1) % 4;
    setStep(nextStep);
  }

  function prevStep() {
    if (step - 1 < 0) return;
    const nextStep = step - 1;
    setStep(nextStep);
  }

  // step 1 states
  const [newBuilding, setNewBuilding] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState("");

  const [option, setOption] = useState(0); // decide to add new building or select from old
  const [forceClose, setForceClose] = useState(false); // force close dropdown

  // step 2 states
  const [newRoom, setNewRoom] = useState({ id: "", name: "", floor: "" });

  // step 3 states
  const [sensors, setSensors] = useState([]);
  function addSensor() {
    let temp = [...sensors];
    temp.push({ id: "id", name: "name", type: "type" });
    setSensors(temp);
  }

  const step1 = (
    <div className="step1 stepPage">
      <div
        className="selection"
        style={option === 0 ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <div
          onClick={() => {
            setOption(0);
            setForceClose(false);
          }}
          className="selectBtn"
        >
          {option === 0 ? <BsRecordCircle /> : <BsCircle />}
        </div>
        <div
          style={
            option === 0 ? { pointerEvents: "auto" } : { pointerEvents: "none" }
          }
        >
          <Dropdown
            forceClose={forceClose}
            selected={selectedBuilding}
            options={["building 1", "building 2", "building 3", "building 4"]}
            setSelected={setSelectedBuilding}
            placeHolder="Select Building"
            styleContext="addConfig"
          ></Dropdown>
        </div>
      </div>
      <h4 style={{ marginBottom: "5px" }}>Or</h4>

      <div
        className="selection verticle"
        style={option === 1 ? { opacity: "1" } : { opacity: "0.5" }}
      >
        <div className="firstRow">
          <div
            onClick={() => {
              setOption(1);
              setForceClose(true);
            }}
            className="selectBtn"
          >
            {option === 1 ? <BsRecordCircle /> : <BsCircle />}
          </div>
          <h4>Add New Building</h4>
        </div>

        <div
          style={
            option === 1 ? { pointerEvents: "auto" } : { pointerEvents: "none" }
          }
        >
          <input
            placeholder="Building Name"
            onChange={(event) => {
              setNewBuilding(event.target.value);
            }}
            value={newBuilding}
          ></input>
        </div>
      </div>

      <div className="btnWrapper">
        <RectButton text={"Continue"} onClick={() => nextStep()}></RectButton>
      </div>
    </div>
  );

  const step2 = (
    <div className="step2 stepPage">
      <div>
        <div className="header">Room ID (unique)</div>
        <input
          type="text"
          placeholder="Room ID"
          onChange={(e) => {
            setNewRoom({ ...newRoom, id: e.target.value });
          }}
        />
      </div>
      <div>
        <div className="header">Room Name (unique)</div>
        <input
          type="text"
          placeholder="Room Name"
          onChange={(e) => {
            setNewRoom({ ...newRoom, name: e.target.value });
          }}
        />
      </div>
      <div>
        <div className="header">Floor</div>
        <input
          type="text"
          placeholder="Floor"
          onChange={(e) => {
            setNewRoom({ ...newRoom, floor: e.target.value });
          }}
        />
      </div>

      <div className="btnWrapper">
        <RectButton text={"Continue"} onClick={() => nextStep()}></RectButton>
        <span onClick={() => prevStep()}> Back </span>
      </div>
    </div>
  );

  const step3 = (
    <div className="step3  stepPage">
      <div className="tableWrapper">
        <table className="sensorTable">
          {sensors.length > 0 && (
            <Header entries={["Sensor Id", "Name", "Type"]} />
          )}
          <tbody>
            {sensors.map((element, index) => {
              return (
                <AddSensorRow
                  key={index + "tableData"}
                  rowData={element}
                  index={index}
                  setOpenDelete={() => {}}
                  setOpenUpdate={() => {}}
                  sensors={sensors}
                  setSensors={setSensors}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="btnWrapper addBtnWrapper">
        <RectButtonWithIcon
          text={"Add Sensor"}
          icon={<IoIosAddCircleOutline />}
          onClick={() => addSensor()}
        ></RectButtonWithIcon>
      </div>
      <div className="btnWrapper">
        <RectButton text={"Continue"} onClick={() => nextStep()}></RectButton>
        <span
          onClick={() => {
            prevStep();
          }}
        >
          Back
        </span>
      </div>
    </div>
  );

  const step4 = (
    <div className="step4  stepPage">
      A new room is configured successfully.
      <div className="btnWrapper">
        <RectButton text={"Done"} onClick={() => nextStep()}></RectButton>
        <span onClick={() => prevStep()}> Back </span>
      </div>
    </div>
  );

  const stepsTitle = [
    "Select Building",
    "Configure Room",
    "Configure Sensors",
    "Done",
  ];
  const steps = [step1, step2, step3, step4];
  const results = [
    `${option === 0 ? selectedBuilding : newBuilding}`,
    `Id: ${newRoom.id}, Name: ${newRoom.name}, Floor: ${newRoom.floor}`,
    `Sensors added: ${sensors.length}`,
    ``,
  ];
  return (
    <div className="addConfigWrapper">
      <div className="header">
        <h1>New Config</h1>
        <RxCrossCircled className="closeBtn" />
      </div>
      <div className="body">
        {steps.map((element, index) => {
          return (
            <Step
              currStep={step}
              key={"Step" + index}
              index={index}
              title={stepsTitle[index]}
              result={results[index]}
            >
              {element}
            </Step>
          );
        })}
      </div>
    </div>
  );
};

export default AddConfig;
