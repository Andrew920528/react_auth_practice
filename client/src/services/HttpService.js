import axios from "axios";

export async function getBuildings() {}

export async function addBuilding(r) {
  let data = {
    service: "sensor",
    operation: "add_config",
    dump_list: [r],
  };
  const res = await axios.post("http://210.24.187.227:5062", data);
  console.log(res.data);
}

export async function deleteBuilding(id) {
  let data = {
    service: "sensor",
    operation: "delete_config",
    _id: id,
    update_sensor_id_list: [],
  };
  const res = await axios.post("http://210.24.187.227:5062", data);
  console.log(res.data);
}

export async function editBuilding(id, newData) {
  let data = {
    service: "sensor",
    operation: "update_config",
    _id: id,
    building_description: newData.building_description,
    floor: newData.floor,
    room_description: newData.room_description,
  };

  const res = await axios.post("http://210.24.187.227:5062", data);
  console.log(res.data);
}
