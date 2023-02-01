import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData} from "./Show";
import { setData }  from "./Show";

function Disp() {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((num)=> dispatch(setData(num)));    
    },[])
  
    const Count = useSelector(fetchData);
    console.log (Count)

    // count.forEach((item,index)=>{
    //   console.log(item);
    // }
    
  return (
    <div className="side">
      {Count}
    </div>
  );
}

export default Disp
