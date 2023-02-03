export {ADD_TO_CART,REMOVE_TO_CART} from "./constant"
export const addtoCart = (data) => {

    console.warn("action called",data)
    return {
        type:'ADD_TO_CART',
        data:"1 item"
    }
}