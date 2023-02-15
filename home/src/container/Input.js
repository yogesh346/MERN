import React from "react";
const Input = ({type,placeholder,val,onChange})=>{
    return(
<div className="inputss">
<input 
type={type}
placeholder={placeholder}
value={val}
onChange={onChange} />
</div>
    )
}
export default Input;