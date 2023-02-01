
import { Route, Routes, useNavigate } from "react-router-dom";
import Disp from "./Disp";
import Store from "../store/store";

function Rooute() {
  const navigate = useNavigate(); //usenavigate ek page se dusre page m jane k liye hota hai
    return (
    <div>
        {/**fetching data from the store */}
      <Routes>
        <Route index path="/" element={<button onClick={() => navigate("/users")}>Go To Data</button>}/>
        <Route path="/users" element={<Disp />} /> {/**phle page pe dikhega jb m button click kruga */}
      </Routes>

    </div>
  );
}

export default Rooute;