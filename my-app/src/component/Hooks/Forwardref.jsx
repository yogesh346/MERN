import React, { Fragment, useRef} from "react";
import Child from "./Child";
import "./parent.css";

export default function Parent() {
  const tblRef1 = useRef(null);          //ek function bnaya h parent naam ka uske andr two ref kar diye
  const tblRef2 = useRef(null);

  const scrollBtn = () => {             //class ka pura function call kiya hai yha
    //Attempt scroll till down in button
    //yha pe call kar diya scroll event  
    tblRef1.current.scrollEvent();
    tblRef2.current.scrollEvent();
  };

  return (
    <Fragment>
      <button onClick={scrollBtn}>Click Here To Scroll</button> 
      <div className="container">
        {/**yha pe call kra hai tblRef and tblRef2 */}
        <Child ref={tblRef1} />
        <Child ref={tblRef2} />
      </div>
    </Fragment>
  );
}