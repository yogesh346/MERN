import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

const Store = configureStore({
    reducer:{
        counter:counterReducer,//counterslice se aa ra hai
    },
});
export default Store;

//