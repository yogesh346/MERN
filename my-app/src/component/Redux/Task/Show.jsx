import { createSlice } from "@reduxjs/toolkit";

const Show = createSlice({
  name: "counter",
  initialState: {
    data:[],
  },
  reducers: {
    setData: (state,action) => {
        state.data = action.payload
    },
  },
});

export const { setData } = Show.actions;
export const fetchData = state => state.counter.data
export default Show.reducer;