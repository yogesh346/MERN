import React from "react"
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'  //query string k liye use kiya hai question marks se suru hota h query params

function UsePa (){                    //function bnaya hai useparams ka
    const {address} = useParams()        //return an object key value pair of the dymanic params from the current url
    const [search,setSearch]=useSearchParams()
    console.warn(search.get('params'))    //param ki value get karni h to lgaya to lgaya warn
    const params = search.get("params")    //function bna liya pARAM KA value git karne k liye
    return(
        <div>
            <h1>Hamirpur {address} Nadaun</h1>     {/**address m nadaun de diya */}
            <h3>Query params {params} </h3>        {/** */}
            <button onClick={()=>setSearch({filter:'active'})}>User</button>
            <button onClick={()=>setSearch({})}>Reset</button>
        </div>
    )
}
export default UsePa
