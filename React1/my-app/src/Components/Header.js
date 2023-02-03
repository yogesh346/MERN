
import { useSelector } from "react-redux";
import "../App.css"
const Header = ()=>{
    const result =useSelector((state)=>state);
    console.warn("redux data in header",result)
    return(
        <div className="header">
            <div className="Cart_div">
                <span>0</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"alt=""/>
            </div>
        </div>
    )
}
export default Header;