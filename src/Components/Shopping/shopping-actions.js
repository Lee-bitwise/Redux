import * as actionTypes from './shopping-types';

export const addToCart=(productId)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:productId,
        },
    };
};


export const removeFromCart=(productId)=>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:{
            id:productId,
        },
    };
};

export const adjustItemQty=(productId,value)=>{
    return{
        type:actionTypes.ADJUST_QTY,
        payload:{
            id:productId,
            qty:value,
        },
    };
};

export const loadCurrentproduct=(product)=>{
    return{
        type:actionTypes.LOAD_CURRENT_ITEM,
        payload:product,
        };
    };
