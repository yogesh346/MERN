import React from 'react';                        //appne kisi bhi dom element ko directly acess kar skte hai 
import { useState } from 'react';                 //dom k andr change kar skte hai
import { useRef } from 'react';                   //useref ka use kar k apna ek ref create krege phr ek element 
                                                  //bnayuga 
function App() {                                  //useref ka use kar k ek ref bnayuga usko main attach kruga apne element k sath
    const refElement = useRef("")                 //hmare element k jitni bhi property hai woh sari useref  us elemnt k ek variable 
    const [name,setName] = useState("yogesh Dhiman")     //main store karwa dege
    console.log(refElement)                       //hr issi variable ka use kar k main apne element k andr change kruga direclty
                                                  //actual dom k andar
    function Reset(){
        setName("")
        refElement.current.focus()
    }
    function handleInput(){
        refElement.current.style.color="blue";
    }
    return (
        <>
        <h1> Learning useref</h1>
        <input ref={refElement} type ="text"value = {name} onClick={(e)=> setName(e.target.value)}></input>
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInput}>handle input</button>
        </>
    );
}
export default App;
