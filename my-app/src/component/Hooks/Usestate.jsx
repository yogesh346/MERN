import React ,{useState} from 'react';
function Usestate(){
    const [count,setcount] = useState(4) //intilization value 4
    function decrementcount(){           //function bnaya hai decrecount ka
        setcount(count - 1)              //derement kiya hai
    }

    function incrementcount(){           //function bnaya hai increment ka
  setcount(count + 1)                    //increment kiya hai
    }
    function multicount(){               //mutliply ka function bnaya hai
        setcount(count * 2)              // mutliply kra hai
    }

  return (
    <> 
    <button onClick={decrementcount}>-</button>   
    <span>{count}</span>
    <button onClick={incrementcount}>+</button>
    <button onClick={multicount}>x</button>
    </>
  )
}
export default Usestate;