import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

function Name(){
    const {myname} = useParams();
    return(
        <div>
            <h1>my name is{myname}</h1>
        </div>
    )
}
export default Name