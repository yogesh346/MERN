import React from 'react';                        //appne kisi bhi dom element ko directly acess kar skte hai 
import { useState } from 'react';                 //dom k andr change kar skte hai
import { useRef } from 'react';                   //useref ka use kar k apna ek ref create krege phr ek element 
                                                  //bnayuga  '""pass element hmara refelement m gya
function App() {                                  //useref ka use kar k ek ref bnayuga usko main attach kruga apne element k sath
    const refElement = useRef("")                 //hmare element k jitni bhi property hai woh sari useref  us elemnt k ek variable 
    const [name,setName] = useState("yogesh Dhiman")     //main store karwa dege
    const input = (e)=> setName(e.target.value)                        //actual dom k andar
    console.log(refElement)                       //hr issi variable ka use kar k main apne element k andr change kruga direclty
    function Reset(){
        setName("")      //reset m khali string de di agr m isme kuch likhuga to likh skta hu
        refElement.current.focus()
    }
    function handleInput(){
        refElement.current.style.color="blue";   //yha pe mene colour diya hai blue
    }
    return (
        <>
        <h1> Learning useref</h1>
        <input ref={refElement} type ="text"value = {name} onChange={input}></input>  
        {/**jo upr ref element bnaya hai woh yha pass kar rha hu main */}
        <button onClick={Reset}>Reset</button>
        <button onClick={handleInput}>handle input</button>
        </>
    );
}
export default App;
