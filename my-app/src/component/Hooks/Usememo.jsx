import React , {useState} from "react";
import { useMemo } from "react";       //usememo main kuch function unnecessry call hote rhte hai unko rokne k liye 
function App(){                       //usememo ka use karte hai
    const [add,setAdd]=useState(0);   //variable declear kra hai or insilition value 0 di hai
    const [manis,setManis]=useState(20)    //two variable declear kra hai or insilition value 20 di hai
    const mutliplication = useMemo(function mutliply(){ //ek multipication ka function bnaya
        console.log("AbCD")
        return add+2;    //return krwaya jo mera add variable hai usme mko mustiply 2 kr k do
    })
    return(
        <div className='App'>
        <h1>Learning useMemo</h1>
        {mutliplication}<br/>
        <button onClick = {()=>setAdd(add+ 2)}>Add</button>  {/**button bnaya add ka or jb m add pe click kruga to 2 value bad jyegi */}
        <span>{add}</span><br/>{/**isme jb b m adition button pe click kru to add variable show kre */}
        <button onClick={()=>setManis(manis -1)}>substration</button>
        <span>{manis}</span>{/**isme jb b manis button pe click kru to manis variable show kre   or jb b m manis pe click kru to manis ki ek value kam ho jye */}
        </div>
    );
}
export default App;