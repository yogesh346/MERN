//Action kya hote hai react js se redux  k andr 
//data ko send krne k liye tb hum action call krte hai 
//action m jb hum data lege to us data to reducer k pass send krege reducer pass
//action k andr changes b kr skte hai  phr reducer k pass bjna hi bjna hai 
//reducer us data ko store m bej dega taki hum kisi or component k andr us data to use kr skte
//reducer m hum row data rkhne hai
//jb bhi hum action m kuch return krege to ek type key honi chahiye or woh same 
//type ki key reducer m bhi honi chahiye 
//tbhi reducer ko smjh aayega ki mujhe kon se action se baat krni hai
import { ADD_TO_CART } from "./constant";
import { REMOVE_FROM_CART } from "./constant";
import { EMPTY_CART } from "./constant";
export const addToCart = (data) => {
  console.log("action called ", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
export const removeToCart = (data) => {
  console.log("remove action called ", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const emptyCart = () => {
  console.log("empty action called ");
  return {
    type: EMPTY_CART,
  };
};
