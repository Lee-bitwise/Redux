import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import { styled } from '@material-ui/core';
import {connect } from "react-redux";




const Header = ({cart}) => { 

const [cartCount,setCartCount] = useState(0);
   
   useEffect(() => {
      let count = 0;
      cart.forEach((item)=>{
          count += item.qty;
      });
      
      setCartCount(count);
   }, [cart, cartCount]);

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
            <Link to ="/"> <h1>Lee Store </h1></Link>
           </div>
           <Link to="/cheakout">
           <div className="cart">
           <ShoppingCartIcon/>
           <span>{cartCount}</span>
           </div>  
           </Link>  
        </div>
    );
};


const mapStateToProps = (state)=>{
    return{
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Header);
