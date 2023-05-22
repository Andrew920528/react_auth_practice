import { configureStore } from "@reduxjs/toolkit";

// import eventListSlice from "./slices/eventListSlice";

import sensorListSlice from "./slices/sensorListSlice";
import configListSlice from "./slices/configListSlice";

const store = configureStore({
  reducer: {
    sensorList: sensorListSlice,
    // eventList: eventListSlice,
    configList: configListSlice,
  },
});

export default store;
