import React, {useEffect, useState} from "react";

export default function Effect(){      //function bnaya hai
    let state = 'posts'                  
    const [resourceType,setResourceType] = useState(state);   //
    
    console.log(`Render`);
    
    //useEffect() use
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
          .then(response => response.json())
          .then(json => console.log(json))
    },[resourceType])

        
    return(
        <>
        <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        </>
    )
}