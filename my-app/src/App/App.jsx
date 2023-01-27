import React  from 'react'
import { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
//import Props from '../component/Hooks/Props'
//import Useref from '../component/Hooks/Router/
import Useparams from '../component/Router/Usepa'
const App = () => {
  return (
    // <Fragment>
    <BrowserRouter>
        <Useparams/>
        </BrowserRouter>
     //   <props name = {"yogesh"}/>
    //</Fragment>
  )
}

export default App;