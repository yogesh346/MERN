import React, { useMemo, useState } from "react";

export default function Adddata() {
  const [state, setState] = useState([]);
  const [count,setCount] = useState(0);
//   let dispData = 0;
  const hndlChange = (chngData, index) => {
    const inpData = [...state];
    inpData[index] = chngData.target.value;
    // dispData = chngData.target.value;
    setState(inpData);
  };
  /*
  
  const validator = ()=>{
    if (Number.isInteger(state)) {
        return(
            parseInt(shwData)
        )
    } else {
        return(shwData)
    }
  }*/

  const hndlDelete = (index) => {
    const valDlt = [...state];
    valDlt.splice(index, 1);
    setState(valDlt);
  };

  const add = () => {
    setState([...state, []]);
  };


  const countt = ()=>{
    let sum = 0;
    state?.forEach((item)=>{
        // if(){

        // }
         if (!isNaN(item)) {
            sum += parseInt(item);
        } else {
            item = 0
        }
    })
    setCount(sum);
  }
  useMemo(countt,[state])

  const fieldAdd = (item, index) => {
    return (
      <div key={index}>
        <input
          type="text"
          value={item}
          onChange={(data) => hndlChange(data, index)}
          name="field"
        />
        <button
          onClick={() => {
            hndlDelete(index);
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  let data = parseInt(state);
  console.log(data);

  
//     let newData = [];
//     newData.forEach((item)=>{
//         data = item 
//     })
//     newData.map((item)=>{
//         return(item)
//     })
//   }
console.log(count,`total`);
  return (
    <div>
        <div>
         <button onClick={add}>Click here</button>
      {state.map(fieldAdd)}
      </div>
      <h3>Total Sum {count}</h3>
      <p>{count}</p>
    </div>
  );
}