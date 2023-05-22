import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const sensorListSlice = createSlice({
  name: "sensorList",
  initialState,
  reducers: {
    addSensorList: (state, action) => {
      let obj = {};
      obj.id = action.payload.id;
      obj.type = action.payload.type;
      obj.status = action.payload.status;
      obj.lastUpdate = new Date();

      state.data.push(obj);
    },
    updateSensorList: (state, action) => {
      for (let i in state.data) {
        if (state.data[i].id === action.payload.id) {
          state.data[i].type = action.payload.type;
          state.data[i].status = action.payload.status;
          state.data[i].lastUpdate = new Date();
          break;
        }
      }
      // state.data.unshift(action.payload);
    },
    deleteSensorList: (state, action) => {
      // state.data.unshift(action.payload);
      const id = action.payload.id;

      for (let i in state.data) {
        if (state.data[i].id === id) {
          state.data.splice(i, 1);

          break;
        }
      }
    },
  },
});

export const { addSensorList, updateSensorList, deleteSensorList } =
  sensorListSlice.actions;

export const selectSensorList = (state) => state.sensorList.data;
export default sensorListSlice.reducer;
