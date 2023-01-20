import React, { useState } from 'react'
import ChildA from './ChildA'

export default function Prnt() {
   const [add,setAdd] = useState(0)

  return (
    <div>
      <h1>Learning useCallback</h1>
      <ChildA/>
      <h1>{add}</h1>
      <button onClick={()=> setAdd(add + 1)}>Addition</button>
      
    </div>
  );
}
