import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
//store k andr sari application ka data API ka bhi hota hai
//ye data hume le k aana hotA HAI PROVIDER K Andr as a props
