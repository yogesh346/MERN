import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
export const productData = (data = [], action) => {
  switch (action.type) {
    //NO NEED BECAUSE WE CALL WE CALL PRODUCTLIST TO SAGA
    // case PRODUCT_LIST:
    //   console.log("productlist conditon", action);
    //   return [action.data];
    case SET_PRODUCT_LIST:
      console.log("productlist conditon", action);
      return [...action.data];
    default:
      // return "No action called"
      return data;
  }
};