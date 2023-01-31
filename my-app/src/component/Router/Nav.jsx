
import React from "react";
import {Link,Outlet,useRoutes} from 'react-router-dom'
import Details from './Details'

function Nav (){
    return(
        <>
        <div>
            <ul>
                <li>
                    <Link to="/age"></Link>
                    </li>
                    <li>
                        <Link to="/name">Name</Link>
                    </li>
                    <ul>
                    <li>
                        <Link to="/name/details">Details</Link>

                    </li>
                    </ul>
                    </ul>

                    </div> 
                    <Outlet/>
                    </>
    );
}
export default Nav