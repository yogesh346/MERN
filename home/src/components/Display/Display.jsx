import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Display.css";
import Header from "../Header/Header";
import Footer from "../footer/Footer";

function Display() {
  return (
    <Fragment>
    <Header />
    <div className="main">
      <div className="sidenav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/directory">Directory</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
      </div>
     
      <Footer />
    </Fragment>
  );
}

export default Display;
