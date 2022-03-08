import { configureStore } from "@reduxjs/toolkit";
import userReducer from "utils/features/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
