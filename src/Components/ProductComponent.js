import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const ProductComponent = () => {
    const products = useSelector((state)=>state.allProducts.products);
    const renderList =products.map((product)=>{
    const {id,title,image,price,category} = product;    
          return(
            <Wrapper className = "four wide column " key={id}>
            <Link to={`/product/${id}`}>
          <div className="ui link cards">
              <div className="card">
                  <div className="image">
                    <img src={image} alt={title}/>
                  </div>
                  <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">${price}</div>
                      <div className="meta"><p className="catagor">{category}</p>
                      <button>Learn More</button>
                      </div>
                      
                  </div>
          
          
          </div>
          </div>
       </Link>
      </Wrapper>)

    })
    return (
        <>{renderList}</>
    );
};

const Wrapper = styled.div`
height: 40vmin;
.ui.cards > .card > .image {
  height: 250px;
  padding: 20px;
  background: #fff;
  margin: auto;
}
.ui.cards > .card > .image > img {
  height: 100%;
  max-width: 100%;
  width: auto;
  background: pink; 
}
.ui.cards > .card > .content > .header {
  height: 48px;
  overflow: hidden;
  margin-bottom: 5px;
}
.ui.cards > .card > .content > .description {
  height: 36px;
  margin-bottom: 0px;
  overflow: hidden;
}
.ui.cards > .card .meta.price {
  margin-bottom: 5px;
  font-size: 18px;

  font-weight: 600;
}
.ui.cards > .card .price > a {
  font-size: 1.3rem;
  color: #222;
}
  .meta{
display:flex; 
justify-content:space-between;
color:black;
  }
`;


export default ProductComponent;
