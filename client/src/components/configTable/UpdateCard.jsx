import React, { useState, useEffect } from "react";
import PromptCard from "../PromptCard";
import { RxCrossCircled } from "react-icons/rx";
import { editBuilding } from "../../services/HttpService";
import { useDispatch, useSelector } from "react-redux";
import {
  configListSelector,
  updateConfigList,
} from "../../features/slices/configListSlice";

const UpdateCard = ({ openUpdate, setOpenUpdate }) => {
  const [buildingDesc, setBuildingDesc] = useState("");

  const [floor, setFloor] = useState("");
  const [roomDesc, setRoomDesc] = useState("");

  const dispatch = useDispatch();
  const configTable = useSelector(configListSelector);
  function submit() {
    let newData = {
      index: openUpdate,
      building_description: buildingDesc,
      floor: floor,
      room_description: roomDesc,
    };
    editBuilding(configTable[openUpdate]._id, newData);

    dispatch(
      updateConfigList({
        index: openUpdate,
        buildingDesc: buildingDesc,
        floor: floor,
        roomDesc: roomDesc,
      })
    );

    alert("Successfully updated!");
    setOpenUpdate(null);
  }
  useEffect(() => {
    if (openUpdate != null && openUpdate >= 0) {
      setBuildingDesc(configTable[openUpdate].building_description);

      setFloor(configTable[openUpdate].floor);
      setRoomDesc(configTable[openUpdate].room_description);
    } else {
      setBuildingDesc("");

      setFloor("");
      setRoomDesc("");
    }
  }, [openUpdate]);
  return (
    <>
      <PromptCard
        id={"update-card"}
        width={40}
        height={60}
        padding={"10px"}
        promptCardData={
          openUpdate != null &&
          openUpdate >= 0 &&
          openUpdate < configTable.length
        }
      >
        <div className="cardContent">
          <div className="topRow">
            <h2>Update Info</h2>
            <RxCrossCircled
              className="closeBtn"
              onClick={() => {
                setOpenUpdate(null);
              }}
            ></RxCrossCircled>
          </div>
          <div>
            <hr />
          </div>
          <div className="mainWindow updateWindow">
            <div className="prompt-content building-prompt-content">
              <div className="prompt-input">
                <label htmlFor=""> Building Description </label>
                <input
                  type="text"
                  onChange={(event) => setBuildingDesc(event.target.value)}
                  value={buildingDesc}
                  placeholder="Building Description"
                />
              </div>
              <div className="prompt-input">
                <label htmlFor=""> Floor </label>
                <input
                  type="text"
                  onChange={(event) => setFloor(event.target.value)}
                  value={floor}
                  placeholder="Floor"
                />
              </div>

              <div className="prompt-input">
                <label htmlFor=""> Room Description </label>
                <input
                  type="text"
                  onChange={(event) => setRoomDesc(event.target.value)}
                  value={roomDesc}
                  placeholder="Room Description"
                />
              </div>
            </div>

            <div className="submit building-submit">
              <button className="btn" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </PromptCard>
    </>
  );
};

export default UpdateCard;
