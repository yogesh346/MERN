import React, { memo } from "react";

function Child({ index, text, handleChangeChild }) {  //parent ki jo props pass ki thi woh yhAA AA RI H
  const inputChange = ({ target: { value } }) => {    //FUNCTION BNAYA HAI INPUTCHANGE ka
    handleChangeChild(index, value);             //parent bala function yha pe call ho rha hai
  };
  console.log("here", index);  //printing statement
  return (
    <div>
      <input type="text" value={text} onChange={inputChange} /> 
    </div>
  );
}

export default memo(Child);
//yha pe export kr diya memo kar k