import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incriment, decriment, incrimentByvalue } from "./CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value); //useslector m phle state aayegi phr value nikal lege 
   const dispatch = useDispatch();
  const [incrimentAmount, setIncrimentAmount] = useState(0);   //insitial state 0 di hai mene zero hoga screen pe

  return (
    <div>
      <button onClick={() => dispatch(incriment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decriment())}>-</button>
      <div>
        <input
          value={incrimentAmount}
          onChange={(e) => setIncrimentAmount(e.target.value)}
        ></input>
        <button
          onClick={() => dispatch(incrimentByvalue(Number(incrimentAmount)))}
        >
          Add value
        </button>
      </div>
    </div>
  );
}

export default Counter;

//3 button bnaya ek incrimenet ka or ek decriment ka or add value ka 
