import React from "react";
import React,{ useState } from "react";

export default function State() {
    const [state, setState] = useState( //two state bnayi ek state return krta hai current state 
    {
        value:"",                         //setstate = hmare state ko update krne m help karta hai
        value1:""
    });
    // const [state1, setState1] = useState("");
           //... spred operator isko dal k koi b chiz hogi usko ye khich lega
    return(
        <>
        <input type="text" onChange={(evt) => setState({...state,value:evt.target.value})} value={state.value} />
        <input type="text" onChange={(evt) => setState({...state,valu:evt.target.value})} value={state.value1} />
        <h1>Here {state.value}</h1>
        <h1>Here {state.value1}</h1>
        </>
    )
}