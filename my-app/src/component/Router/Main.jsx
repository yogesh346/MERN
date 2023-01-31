import Name from './Name'
import Nav from './Nav'
import Details from './Details'
import { useRoutes } from 'react-router'


function Main () {
    let element = useRoutes ([
        {
            element:<Nav/>,
            children:[
                 {path:"/",element:<Name/>},
                {path:"/name/:myname?",element: <Name/>},
                {path:"/name/details",element:<Details/>}
            ]
        }
    ]
    )
    return element;
}
export default Main