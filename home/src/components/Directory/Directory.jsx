import React from "react";
import "./Directory.css";
import { ReactComponent as Image } from "../../assets/search.svg";
function Directory() {
  return (
    <div className="Card">
      <Image width={100} height={100} viewBox="0 0 50 50" />
      <img
        src="https://biztecno.net/wp-content/
        uploads/2022/03/who-we-are-biz-infotecno-pvt-ltd.png"
        alt="Avatar"
      />
      <div className="container">
        <h3>Ashutosh Sharma</h3>
        <p>Director & CEO</p>
      </div>
    </div>
  );
}

export default Directory;
