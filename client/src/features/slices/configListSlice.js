import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchConfigList = createAsyncThunk(
  "configList/fetchConfigList",
  async () => {
    const res = await axios.get("http://210.24.187.227:5062", {
      params: {
        service: "sensor",
        operation: "get_config",
      },
    });
    const data = await res.data;

    return data;
  }
);

const configListSlice = createSlice({
  name: "configList",
  initialState,
  reducers: {
    addConfigList: (state, action) => {
      state.data.push(action.payload);
    },
    updateConfigList: (state, action) => {
      //   for (let i in state.data) {
      //     if (state.data[i].id === action.payload.id) {
      //       state.data[i].type = action.payload.type;
      //       state.data[i].status = action.payload.status;
      //       state.data[i].lastUpdate = new Date();
      //       break;
      //     }
      //   }
      // state.data.unshift(action.payload);
      state.data[action.payload.index].building_description =
        action.payload.buildingDesc;
      state.data[action.payload.index].floor = action.payload.floor;
      state.data[action.payload.index].room_description =
        action.payload.roomDesc;
    },
    deleteConfigList: (state, action) => {
      state.data.splice(action.payload.index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConfigList.pending, (state) => {
      state.loading = true;
      return state;
    });
    builder.addCase(fetchConfigList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.message;

      state.error = "";
      return state;
    });
    builder.addCase(fetchConfigList.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
      return state;
    });
  },
});

export const { addConfigList, deleteConfigList, updateConfigList } =
  configListSlice.actions;
export const configListSelector = (state) => state.configList.data;
export default configListSlice.reducer;
