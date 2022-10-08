// import { useState } from "react";
import { useEffect, useState } from 'react';

import CartItem from './cartItem';

import { convertMoney } from '../../utils';
import { useSelector } from 'react-redux';

function Cart() {
  const products = useSelector((store) => store.cart);

  function handleClickBuy() {
    alert('Order Success !!! Thanks bro ');
  }

  const totals = products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.order_quantity,
    0
  );

  return (
    <div className="detailCart">
      <div className="left">
        {products.length === 0 && (
          <div className="cartNull">
            <h1>ố Ồ...chưa có gì ở đây cả</h1>
          </div>
        )}

        {products?.map((product) => {
          return <CartItem product={product} />;
        })}
      </div>
      {products.length !== 0 && (
        <div className="right">
          <h1>SHOPPING CART</h1>
          <div className="infoUserCart">
            <input placeholder="FIRST NAME" />
            <input placeholder="LAST NAME" />
            <input placeholder="YOUR PHONE NUMBER" />
            <input placeholder="ADDRESS" />
            <input placeholder="NOTE" />
          </div>
          <div className="total">
            <div className="totalPrices">
              <p>
                TOTAL PRICE : <span>{convertMoney(totals)}</span>
              </p>
            </div>
            <button onClick={handleClickBuy}>BUY NOW</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;