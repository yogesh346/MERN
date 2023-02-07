import { addToCart, removeToCart, emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { fetchData } from "../redux/selector";
//to get same data in same component
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Main() {
  const dispatch = useDispatch();
  const data = useSelector(fetchData);
  console.log("data in main component", data);
  const product = {
    name: "phone",
    type: "mobile",
    price: 3333,
  };
  useEffect(()=>{dispatch(productList())
  },[])
  return (
    // <div>
    //   <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    //   <div>
    //     <button onClick={() => dispatch(removeToCart(product.price))}>
    //       Remove from cart
    //     </button>
    //   </div>
    //   <div>
    //     <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
    //   </div>
    //   <div>
    //     <button onClick={() => dispatch(productList())}>
    //       Get Product List
    //     </button>
    //   </div>
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.image} alt="" /> 
            <div>Id : {item.id}</div>
            <div>Category : {item.category}</div>
            <div>Price : {item.price}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}> Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}> Remove</button>
            </div>
          </div>
        ))}

      </div>
  
  );
}
export default Main;