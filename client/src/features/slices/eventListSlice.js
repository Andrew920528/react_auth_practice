// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import HttpService from "../../services/http.service";

// const initialState = {
//   loading: false,
//   data: [],
//   error: "",
// };

// export const fetchEventList = createAsyncThunk(
//   "eventList/fetchEventList",
//   () => {
//     const res = HttpService.send("get", "security", "get_current_event").then(
//       (response) => response.data.message
//     );
//     return res;
//   }
// );

// const eventListSlice = createSlice({
//   name: "eventList",
//   initialState,
//   reducers: {
//     eventSourceUpdateEventList: (state, action) => {
//       state.data.unshift(action.payload);
//     },
//     finishEventUpdateEventList: (state, action) => {
//       state.data.splice(action.payload, 1);
//     },
//     clearEventList: (state, action) => {
//       state.data = [];
//     },
//     changeSolving: (state, action) => {
//       state.data[action.payload]["solving"] = true;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchEventList.pending, (state) => {
//       state.loading = true;
//       return state;
//     });
//     builder.addCase(fetchEventList.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = "";
//       return state;
//     });
//     builder.addCase(fetchEventList.rejected, (state, action) => {
//       state.loading = false;
//       state.data = [];
//       state.error = action.error.message;
//       return state;
//     });
//   },
// });

// export const {
//   eventSourceUpdateEventList,
//   finishEventUpdateEventList,
//   clearEventList,
//   changeSolving,
// } = eventListSlice.actions;

// export default eventListSlice.reducer;
