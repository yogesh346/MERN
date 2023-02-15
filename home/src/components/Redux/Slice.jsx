import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "user",
  initialState: {
    API: [],
    load: false,
  },
  reducers: {
    setData: (state, action) => {
      state.API = action.payload;
      state.load = false;
    },
    loading: (state) => {
      state.load = true;
    },
  },
});

//reducers
export const { setData, loading } = Slice.actions;

//selector
export const fetchData = (state) => state.user.API;
export const load1 = (state) => state.user.load;

export default Slice.reducer;
