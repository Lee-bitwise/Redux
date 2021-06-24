import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchProduct,removeSelectedProduct } from './Redux/Action/productAction';
import styled from 'styled-components';
import { addToCart } from './Shopping/shopping-actions';

const ProductDetails = ({products,addToCart}) => {
    const product = useSelector((state) => state.product)
    const {image,title,price,category,description}=product;
    const { productId }= useParams();
    const dispatch =useDispatch();
    
    //filter the id
    console.log(product);

    useEffect(()=>{
        if(productId && productId !== "") dispatch(fetchProduct(productId));
        return()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId]);

    


    
    return (
        <Wrapper className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
           
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a>${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                   <button onClick={()=>addToCart(productId.id)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    );
  };
  



const Wrapper =styled.div`

.ui.grid.container {
    margin-top: 65px;
  }
  
  .ui.grid > .row {
    background: pink;
  }
  .ui.grid > .row > .column.lp {
    padding: 20px 40px 20px 20px;
    align-self: flex-start !important;
  }

`;



const mapDispatchToProps=(dispatch)=>{
  return{
    addToCart:(id)=>dispatch(addToCart(id)),

  };
};
  export default connect(null, mapDispatchToProps)(ProductDetails);

