import React, { useMemo, useState } from "react";

export default function Adddata() {       //ek function bnaya 
  const [state, setState] = useState([]);      //two state  bna di
  const [count,setCount] = useState(0);
  const hndlChange = (chngData, index) => {     //hndlechange ka ek function bnaya 
    const inpData = [...state];                 //koi b state dege woh hmari input data m chli jyegi
    inpData[index] = chngData.target.value;
    // dispData = chngData.target.value;
    setState(inpData);       //jo data tha apnA WOH  SET STATE  DAL DIYA
  };
  

  const hndlDelete = (index) => {          //function bnaya koi bhi chiz delete krni ho
    const valDlt = [...state];             //state h koi pdi hui uslo delete krna ya ho jyegi state
    valDlt.splice(index,1);                 //index 1 diya h to ek tukda delete hoga it means ek chiz delete hogi
    setState(valDlt);                //setstate k andr se woh value delete kr di
  };

  const add = () => {                 //ek function bnaya koi b data add krna ho to
    setState([...state, []]);         //koi chiz add ho gyi isme
  };


  const countt = ()=>{       //function bnaya coutt name ka
    let sum = 0;             //sum mtlb zero koi bhi value nhi hogi to zero dhikhayega
    state?.forEach((item)=>{     //
        // if(){

        // }
         if (!isNaN(item)) {     //yha pe condition check krega ki item dali h ya nhi dali 
            sum += parseInt(item);    //agr item dali hai to sum kr dega mhi dali h to zero e rhegi
        } else {
            item = 0
        }
    })
    setCount(sum);           //sum krega 
  }
  useMemo(countt,[state])    //usememo kr diya state k upr

  const fieldAdd = (item, index) => {       //function bnaya field add k naam se uske ander uska index pass kr diya
    return (
      <div key={index}>
        <input
          type="text"
          value={item}
          onChange={(data) => hndlChange(data, index)} //onchange sare data on handle krega handlechange data ko handle  krega
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

  let data = parseInt(state);//sari state ki value yha pe aa jyegi phr print kr dega
  console.log(data);

console.log(count,`total`);     //yha pe print ho jy
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