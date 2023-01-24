import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Contact from "./Contact";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import About from "./About";

// import NoPage from "./pages/NoPage";

export default function App() {      //function bnaya 
  return (
    <div>
    <BrowserRouter>       {/** jo mene path m likha hai woh show krwa ra hai sara data browser main show hoga */}
      <Routes>            {/** */}
        <Route path="/" element={<Layout />}>  {/**ek element declear kiya or path diya or / isliye diYA h mere laYout k page m rahna */}
          <Route index element={<Home />} />   {/**bina click kiye kuch b element show krna hai to woh index m jyega */}
          <Route path="/about" element={<About/>}/>  {/**path sbka ka same e aayega  */}
          <Route path="/contact" element={<Contact />} />
          <Route  element={<Contact/>}>
              <Route index element={<Contact1 />}/>
              <Route path="/Contact1" element={<Contact1 />} />
              <Route path="/Contact2" element={<Contact2 />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

//index ka mtlb mene by default show krwana hai browser pe