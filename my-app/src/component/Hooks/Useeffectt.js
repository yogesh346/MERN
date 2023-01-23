import { useEffect, useState } from "react";
function Useeffectt(){
    const [count,setCounter] = useState(0);
    const [data,setData] = useState("yogesh")
    useEffect(()=>{
        console.log("component mounted");
    },[data]) //yha pe data pass kra hai dependiency main to second yogesh bala chlega 
    function updatecount(){
        setCounter(count+1)
    }
    function updateData(){
        setData("dhiman")
    }
    return (
        <>
        <h1>button click {count} times</h1>  
        <button onClick={updatecount}>Click</button>
        <button onClick={updateData}>Update Data</button>
        </>
    )
};
export default Useeffectt;
//jab hmare component k andar jo bhi state update hoti hai to hmara useeffect use hota hi hota hai
//jb hmara component render hota hai first time to useefect run hota e hota hai
//jb hmara component k andar koi state update hoti hai tb hmara useeffect run hota hai 