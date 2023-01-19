import React, { forwardRef, 
    useImperativeHandle, 
    useRef, 
    useState 
  } from "react";
  
  import "./child.css";
  import data from "./data.json";
  
  const Child = forwardRef((props,ref) => {
  //state save rakhi ek function bnaya scroll event ka ki hmara scroll upae  hai to down chla jye
  
  //and vise virsa
    const saveRef = useRef();
    const [state,setState] = useState(true);
    useImperativeHandle(ref ,() => ({
      scrollEvent: () =>{
        if(state){
          saveRef.current.scrollTop = saveRef.current.scrollHeight;
          setState(false);
        }
        else{
          saveRef.current.scrollTop = 0;
          setState(true);
        }
      },
      
    }));
  
    const renderTableCell = ({ id, parent,title }, index) => {
   return(
    <tr key={`cell-${id}-${index}`}>
    <td>{id}</td>
    <td>{parent}</td>
    <td>{title}</td>
  </tr>
   )
    };
  
    return (
      <div ref={saveRef} className="empTable">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{data.map(renderTableCell)}</tbody>
        </table>
      </div>
    );
  
  });
  
  
  export default Child