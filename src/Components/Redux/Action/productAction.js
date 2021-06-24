// import axios from 'axios';
import fakestoreapi from '../../api/fakeStoreApi'
import { ActionTypes } from "./action-types";

//this code does convert async data creater to syncr datacreater using the midle ware creater using thunk
export const  fetchProducts= ()=> async(dispatch)=>{
    const response =await  fakestoreapi.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data});
    };
    
    export const  fetchProduct= (id)=> async(dispatch)=>{
        const response =await  fakestoreapi.get(`/products/${id}`);
            dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data});
        };
        

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
};

export const selectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};
export const removeSelectedProduct=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    
    };
};
//***************************************************************************************** */


export const addToCart=(productId)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:{
            id:productId,
        },
    };
};


export const removeFromCart=(productId)=>{
    return{
        type: ActionTypes.REMOVE_FROM_CART,
        payload:{
            id:productId,
        },
    };
};

export const adjustItemQty=(productId,value)=>{
    return{
        type:ActionTypes.ADJUST_QTY,
        payload:{
            id:productId,
            qty:value,
        },
    };
};

export const loadCurrentproduct=(product)=>{
    return{
        type:ActionTypes.LOAD_CURRENT_ITEM,
        payload:product,
        };
    };