import React from 'react'
import TotalCost from './TotalCost';
import styled from 'styled-components';
import{connect} from 'react-redux';

const Cheakout = () => {
    
    return (
        <Wrapper>
                 <div className="ui placeholder segment">
                 <div className="ui two column stackable center aligned grid">
                   <div className="middle aligned row">
                     <div className="column lp "><h2>Your Basket Items</h2></div>
                     <div className ="column rp ">
                         <TotalCost/>
                     </div>
                         </div>
                         </div>
                         </div>
                      
                 </Wrapper>
            );
        };
        
        
        


const mapStateToProps = state=>({
     basketProps: state.basketState
});

const Wrapper=styled.div`
        .middle aligned row{
        display: flex;
        padding: 20px;
        padding-top:50px;
        justify-content:space-between;
        }
        `;
export default connect(mapStateToProps)( Cheakout);      
