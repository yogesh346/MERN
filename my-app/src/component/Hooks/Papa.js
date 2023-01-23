//import React,{ useState,useCallback } from "react"
//import ChildA from './ChildA';

//function Papa(){
 //   const [add,setadd]=useState(0);
  //  const name= useCallback(()=>{
   //     console.log(`call...`);
   // },[])
   // return (
       // <div className="App">
         //   <h1>Learning useCcallback</h1>
          //  <ChildA hello = {name}/>
           // <h1>{add}</h1>
           // <button onClick={()=>setadd(add+1)}>Addition</button>
       // </div>
   // );
//}

//export default Papa;

import React,{useState,useCallback} from "react"
import ChildA from './ChildA';

function Papa (){  //function bnaya papa name ka
    const [add,setadd] = useState(0);
    const[add1,setAdd1]=useState(0)
     //two state bnayi ek cureent value ko change krne ko setadd update krne ko
    const name= useCallback(()=>{ //callback ka functon bnaya
        console.log(`yogesh`);  //console krwaya name hmara childA class main hai
    },[add1]) //jo hum []pass krege wohi call hoga bar bar
    return (
        <div className="App">
         
            <ChildA setadd={add1}/> 
            <h1>{add}</h1>
            <button onClick={()=>setadd(add+1)}>plus</button>
            <button onClick={()=>setAdd1(add1+1)}>plus1</button>
            <h1>{add1}</h1> </div>
    );
}
export default Papa;