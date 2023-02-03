import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, load1, loading, setData }  from "../store/Showslice";

function Disp() {
  const dispatch = useDispatch();  //dispatch ka mtlb kuch data send ya dispatch  kr re h action bali file m

  const Count = useSelector(fetchData); //seleter bnaya hau data nikalne k liye selector m se
  const load = useSelector(load1);

  useEffect(() => {
    
    dispatch(loading())
    fetch("https://jsonplaceholder.typicode.com/users") //fake api se data aa rha hai
      .then((response) => response.json())  //data json m rkha hai
      .then((num) => dispatch(setData(num)));
  }, []);


 

  const renderCell = ({id,name,email}, index) => { //jo bhi row object m fetch ho ri uski index nikal rha hai
    return (
      <tr key={index}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  };
  if (load === true) {   //agr loading ho ri h to dikha dega loading
    return(<h1>Loading....</h1>)
  }
  else if(!load && Count.length > 0){ //agr loading nhi ho ri to kuch b ni dikhayega 
    return (
      <div className="side">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>username</td>
            </tr>
          </thead>
          <tbody>{Count
          .map(renderCell)}</tbody>{/**sari file upr data fetch kra woh browser pe dikh jana chahiye */}
        </table>
      </div>
    );
  }
  else{
    return(
      <h2>Data not showed...</h2>
    )
  }
}

export default Disp;
