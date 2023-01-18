import React , {useState} from "react";
import { useMemo } from "react";
function App(){
    const [add,setAdd]=useState(0);
    const [manis,setManis]=useState(20)
    const mutliplication = useMemo(function mutliply(){
        console.log("AbCD")
        return add+2;
    })
    return(
        <div className='App'>
        <h1>Learning useMemo</h1>
        {mutliplication}<br/>
        <button onClick = {()=>setAdd(add+ 2)}>Add</button>
        <span>{add}</span><br/>
        <button onClick={()=>setManis(manis -1)}>substration</button>
        <span>{manis}</span>
        </div>
    );
}
export default App;