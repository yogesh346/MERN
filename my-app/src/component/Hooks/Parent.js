import React, { useState, useCallback } from "react";
import Child from "./Child";
export default function Parent() {
  const [inputsState, setInputsState] = useState(["1", "2", "3"]); //two state bnayi areay ki form main
//   const [data, setData] = useState("123");    //
  const handleChange = useCallback(     //ek function bnaya handlechange ka
    (index, value) => {                 //isme humne value pass ki index or value
    //   console.log(data);
      setInputsState((prevsState) => {      //yhaa pe state update hogi
        prevsState[index] = value;         //jo bhi user type krega woh index m change ho jyega
        return [...prevsState];           //return kr dega yha pe jo new array bnaya hai woh input state ka value ho jyega
      });
    },
    []
  );

  const renderInput = (value, index) => {      //ek  function bnaya render input kr k
    return (                               //text box yha pe return ho jyega
      <Child           //child ka sara code yha aa jyega
        key={`input${index}`}       //sara value set kra hai index ki for eg 1 2 3 $iska mtlb statement m koi variable dalna hai to use hota hai
        text={value}            //array ki value pass hogi 
        handleChangeChild={handleChange}  //props pass kr rha haihand lechangee
        index={index}      //yha index pass ho rha hai
      ></Child>            //close kr diya
    );
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          setData("Hello ");
        }}
      >
        {data}
      </button> */}
      {inputsState.map(renderInput)}   
    </div>
  );
} 
//ye sara render input ko call kr rha hai upr bala code