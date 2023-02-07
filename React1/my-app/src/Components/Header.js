import { useSelector } from "react-redux";
const Header =()=> {
   const  result  =useSelector(state =>state.cartData);
   return(
    <div>className = "header"
        <span>{result.length}</span>
    </div>
   );
}
  export default Header;