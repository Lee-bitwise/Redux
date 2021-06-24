import React from 'react'
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';
const TotalCost  = () => {
    return (
        <Wrapper className="total__cost">
        <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </Wrapper>
  );
     
}

const Wrapper=styled.div`

.subtotal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
  }
  .subtotal__gift {
    /* display: flex;
    align-items: center; */
    margin-top: 13px;
  }
  .subtotal__gift > input {
    margin-right: 5px;
  }
  .subtotal > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
  
`;
export default TotalCost;
