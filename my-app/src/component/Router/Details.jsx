import React from "react";
import { useSearchParams } from "react-router-dom";


function Details () {

    const [search,setSearch]=useSearchParams() //usesearchpara jo bhi url k andr queryparam hai na
    console.log(search.get('age'))  //URL b jo bhi chiz store hoti hai get request k thorw hoti hai
    console.log(search.get('gender'))
    console.log(search.get('comment'))
    const age = search.get('age')
    const gender = search.get('gender')
    const comment = search.get('comment')
    return(
        <div>
            <input type="text" onChange={(e)=> setSearch({age : e.target.value,gender,comment})}/>
        {/**e.target hmara testbox h  text box m jo bhi value daluga woh age m store hogi or ye ek query string bna k browser pe show hoga */} 
            <h2>Age:{age}</h2>

            <h2>Gender:{gender}</h2>
            <input type="text" value={search.get('gender')} onChange={(e) =>setSearch({gender: e.target.value,age,comment})}/>
            <h2>Comment:{comment}</h2> {/**yha gender main jo bhi value daluga woh browser pe show hogi */}
            <input type ="text" onChange={(e)=>setSearch({comment:e.target.value,age,gender})}/>
            <button onClick={()=>setSearch({age,gender,comment,})}>submit</button>
        </div>
    )
}
    export default Details