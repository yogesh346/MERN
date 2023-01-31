import { createSlice } from "@reduxjs/toolkit";  //import krwaya 
// import { Action } from "@remix-run/router";

export const CounterSlice = createSlice({   //function bnaya createslice naame se uske andr reducveer bnayA
  name: "counter",       //NAME COUNter de diya  ye reducer hai 
  initialState: {      //initial state zero de di  screen pe zero rhega 
    value: 0,
  },
  reducers: {                 //reducer k andr 3 function bnaya hai 
    incriment: (state) => {    //ek incriment ka dusra decriment ka or 3 bnaya hai value add krne ka
      state.value += 1;
    },
    decriment: (state) => {
      state.value -= 1;
    },
    incrimentByvalue: (state, Action) => {     //direct value add krega ye screen pe for eg 20,30
      state.value = Action.payload;       //kuch change krna hai to action bnaa hai or payload pe value load ho ri hai 
    },
  },
});
export const { incriment, decriment, incrimentByvalue } = CounterSlice.actions;   //store bali file main chli jyegi 
export default CounterSlice.reducer;
