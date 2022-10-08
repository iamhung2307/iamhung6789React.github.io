// import { useState } from "react";
import { useEffect, useState } from 'react';

import CartHTML from './cartItem';

import { convertMoney } from '../../utils';

function Cart() {
  const products = JSON.parse(localStorage.getItem('cart'));
  // console.log(products)

  function handleClickBuy() {
    alert('Order Success !!! Thanks bro ');
  }

  const [state, setState] = useState(products);
  // total Prices
  // const productCart = document.querySelectorAll('.contentProductCart .total')
  var totals = products.reduce(function (accumulator, currentValue) {
    const total = accumulator + currentValue.price;
    return total;
  }, 0);
  // document.querySelectorAll('.')
  // console.log(totals)
  useEffect(() => {
    function handleCartNull() {
      const productCart = document.querySelector('.contentProductCart');
      const cartNull = document.querySelector('.cartNull');
      const rightCart = document.querySelector('.detailCart .right');
      if (productCart == null) {
        console.log('Cart Null');
        rightCart.style.display = 'none';
        cartNull.style.display = 'block';
      }
    }
    handleCartNull();

    function handleRemoveProductCart() {
      document.querySelectorAll('.imgClose').forEach((imgClose, indexClose) => {
        imgClose.onclick = function () {
          const localCart = localStorage.getItem('cart');
          if (localCart) {
            setState(products.splice(indexClose, 1));
            localStorage.setItem('cart', JSON.stringify(products));
          }
        };
      });
    }
    handleRemoveProductCart();
    // products.forEach((product)=>{
    //   // console.log(product,index)
    //   if(product.id){
    //     localStorage.removeItem('cart',product.id)
    //   }
    // })
  }, []);
  // console.log(products)
  return (
    <div className="detailCart">
      <div className="left">
        <div className="cartNull" style={{ display: 'none' }}>
          <h1>ố Ồ...chưa có gì ở đây cả</h1>
        </div>
        {products.map((product) => {
          return <CartHTML product={product} />;
        })}
      </div>
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
            {/* <p>SHIPPING : 30k</p> */}
            <p>
              TOTAL PRICE : <span>{convertMoney(totals)}</span>
            </p>
          </div>
          <button onClick={handleClickBuy}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
