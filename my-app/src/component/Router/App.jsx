import React from "react";
import "./App.css";
import {
  Route,
  Router,
  RouteObject,
  Routes,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Main from "./ component/Router file/Main.jsx";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route  element={<Contact/>}>
              <Route path="Contact1" element={<Contact1 />} />
              <Route path="Contact2" element={<Contact2 />} />
            </Route>
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
