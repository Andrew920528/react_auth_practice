import { configureStore } from "@reduxjs/toolkit";

// import eventListSlice from "./slices/eventListSlice";

import sensorListSlice from "./slices/sensorListSlice";

const store = configureStore({
  reducer: {
    sensorList: sensorListSlice,
    // eventList: eventListSlice,
  },
});

export default store;
