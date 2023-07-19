import { configureStore } from "@reduxjs/toolkit";
import SessionRedux from "./SessionRedux";
import DashboardData from "./DashboardData";

export default configureStore({
  reducer: {
    session: SessionRedux,
    DashboardData,
  },
});
