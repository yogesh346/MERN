import { BrowserRouter, Routes, Route, useRoutes} from "react-router-dom";
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";   //all file import
import NoPage from "./NoPage";
import Layout from "./Layout";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";

function Routing() {       //function k andr function bnaya array ki form main
  let routingg = [
    {
      path: "/",              
      element: <Layout/>,       // //element layout m chla jyega
      children:[                //children bnaya array ki form m
        {path:'/',element:<Home/>},       
        {path:'/about',element: <About/>},
        {path:'/contact',element:<Contact/>,
          children:[
            {index:true, element:<Contact1/>},  //index lga k contact ki value show hogi e hogi or sath m contact 1 ki b hogi
            {path:'/contact/contact1', element: <Contact1/>},
            {path:'/contact/contact2', element: <Contact2/>}
          ]
        }
      ]
    }
  ]
  return useRoutes(routingg);
}

export default Routing;
