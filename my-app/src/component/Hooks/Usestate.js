import React from 'react'
import { useState } from 'react'
function Usestate() {
    const [count,Setcounter] = Usestate("yogesh")
    let updatecount = () => {
        Setcounter(count + 2)
    }
  return (
    <div>
        <h1>Button clicked{count}times</h1>
        <button onClick={updatecount}>Click</button>

      
    </div>
  );
}
export default useState;
