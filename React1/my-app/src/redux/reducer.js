import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from "./constant";
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add to cart called", action);
      return [action.data,...data];
//remove last item not on behalf of id 
    // case REMOVE_TO_CART:
    //   console.log("remove CALLED", action);
    //  data.length = data.length ?data.length - 1:[]
    //  return [...data];

    case REMOVE_FROM_CART:
      console.log("remove CALLED", action);
    const remainingItem = data.filter((item)=>item.id!==action.data);
      return [...remainingItem];


      case EMPTY_CART:
        console.log("empty CALLED", action);
        data= [];
        return [...data];
    default:
      // return "No action called"
      return data;
  }
};