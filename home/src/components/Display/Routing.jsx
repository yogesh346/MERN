import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Display from "../Display/Display";
import Directory from "../Directory/Directory";
import About from "../About/About";
import Contact from "../Contact/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Display />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="directory" element={<Directory />} />
      </Route>
    </Routes>
  );
}
