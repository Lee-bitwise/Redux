import { ActionTypes } from "../Action/action-types"

const initialState = {
    products:[], 
    cart:[],
    currentItem:null,                                 
};                    

export const productReducer = (state = initialState, { type,  payload }) => {
   switch(type) {
       case ActionTypes.SET_PRODUCTS:
          return {...state, products: payload}; 
          case ActionTypes.FETCH_PRODUCTS:
            return {...state, products: payload}; 
          default:
              return state;

   }
 
}
export const selectedProductReducer =(state={},{type,payload})=>{
      switch(type){
          case ActionTypes.SELECTED_PRODUCT:
              return{...state, ...payload}
          case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return{}
              default:
                  return state;
      }
}
/************************************************* */
export const shopReducer=(state = initialState,{type,payload} )=>{
    switch (type){
        case ActionTypes.ADD_TO_CART:
            //get the items data from the products arry 
            const item = state.products.find(prod=>prod.id === payload.id)
            //check if item is in the cart already
            const inCart = state.cart.find((item)=>
              item.id === payload.id ? true : false
            );
            return {
                ...state,
                cart:inCart ? state.cart.map((item)=>item.id === payload.id ? {...item, qty : item.qty+1} : item) : [...state.cart, {...item, qty:1 }],
            };
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter((item)=>item.id !== payload.id),
            }; 
        case ActionTypes.ADJUST_QTY:
            return {
                ...state,
                cart:state.cart.map(item=>item.id ===payload.id ?{...item,qty:payload.qty} : item),
            };
        case ActionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem:payload,
            };
        default:
            return state;
    }
};































