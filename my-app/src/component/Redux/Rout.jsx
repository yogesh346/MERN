import { Fragment } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Disp from "./Task/Disp"

function Rooute() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route index path="/" element={<button onClick={() => navigate("/users")}>Go to users</button>}/>
        <Route path="/users" element={<Disp />} />
      </Routes>
      
    </div>
  );
}

export default Rooute;