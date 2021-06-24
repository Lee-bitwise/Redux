import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts} from './Redux/Action/productAction';
import {connect } from "react-redux";

const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch (fetchProducts());
        },[]);

    console.log("products:", products);


    return (
        <div className="ui grid container">
        <ProductComponent/>
        </div>
    );
};


export default ProductListing;
