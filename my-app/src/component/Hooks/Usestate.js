import React from 'react'
import { useState } from 'react'
function Usestate() {
    const [count,Setcounter] = Usestate(0)
    let updatecount = () => {
        Setcounter(count + 1)
    }
  return (
    <div>
        <h1>Button clicked{count}times</h1>
        <button onClick={updatecount}>Click</button>

      
    </div>
  );
}
export default Usestate;
