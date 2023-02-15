import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchData, load1 } from "../Redux/Slice";
import { setData, loading } from "../Redux/Slice";
function About() {
  const dispatch = useDispatch();
  const Count = useSelector(fetchData);
  const load = useSelector(load1);

  useEffect(() => {
    dispatch(loading());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((num) => {
        dispatch(setData(num));
        console.log(num);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderdata = ({ id, username, email, address }, index) => (
    <tr key={`${index}`}>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{address.city}</td>
    </tr>
  );
  console.log(Count);
  // const data = []; //test purpose
  if (load.length === 0) {
    return <h1>LOADING...</h1>;
  } else {
    return (
      <div className="about">
        <table className="table">
          <thead>
            <tr>
              <th>USER ID</th>
              <th>UserName</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{Count.map(renderdata)}</tbody>
        </table>
      </div>
    );
  }
}

export default About;

// const [data,setdata] = useState([]);

// async function DataFetch()
// {
//   await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then((response)=>response.json())
//   .then((userData)=>{
//     setdata(userData);
//   });
// }

// useEffect(() => {
// DataFetch();
// }, [])
