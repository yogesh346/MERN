import React , {useState} from "react";
import { useMemo } from "react";
function App(){
    const [add,setAdd]=useState(10);
    const [manis,setManis]=useState(50)
    const mutliplication = useMemo(function mutliply(){
        console.log("ABCD")
        return add*2;
    })
    return(
        <div className='App'>
        <h1>Learning useMemo</h1>
        {mutliplication}<br/>
        <button onClick = {()=>setAdd(add+ 2)}>Addition</button>
        <span>{add}</span><br/>
        <button onClick={()=>setManis(manis -1)}>substration</button>
        <span>{manis}</span>
        </div>
    );
}
export default App;