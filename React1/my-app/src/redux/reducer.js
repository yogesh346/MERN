import {ADD_TO_CART,REMOVE_TO_CART} from "./constant"
export const cartData = (data = [],action) => {
    switch(action.type){
        case ADD_TO_CART:
            //add to cart logic
            console.warn("ADD_TO_CART CONDITION",action)
            return 1+1;
                case REMOVE_TO_CART:
                    //add to cart logic
                    console.warn("REMOVE_TO_CART CONDITION",action)
                    return 1-1;
            default:
                //no case matched
                return 'no action called'
    }
}