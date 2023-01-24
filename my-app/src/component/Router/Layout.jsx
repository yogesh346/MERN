import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        {" "}
        {/**unlisted */}
        <li>
          {" "}
          {/**li ka mtlb list item list m show krna hai to */}
          <Link to="/">Home</Link>{" "}
          {/**agr main "/" du to ap mere home page pe e rahna */}
        </li>
        <li>
          <Link to="/about">About</Link>{" "}
          {/** about isliye likha hai display krwane k liye link ko */}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <ul>
          <li>
            <Link to="/Contact1">Contact1</Link>
          </li>
          <li>
            <Link to="/Contact2">Contact2</Link>
          </li>
        </ul>
      </ul>

      <Outlet />
    </>
  );
};

export default Layout;
//sara kam dikha rha h isko bolte hai layout
//layout m sbhi file ka link likha hai
