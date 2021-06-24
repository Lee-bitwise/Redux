import { combineReducers } from "redux";
import { productReducer ,selectedProductReducer,shopReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer,
    product:selectedProductReducer,
    shop: shopReducer,
});
export default reducers;