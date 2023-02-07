import { takeEvery, put, call } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

const getData = async () => {
  let res = await fetch("https://fakestoreapi.com/products");
  return await res.json();

}

function* getProducts() {
  let data = yield call(getData);
 

  // console.log("action called ", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
export default productSaga;