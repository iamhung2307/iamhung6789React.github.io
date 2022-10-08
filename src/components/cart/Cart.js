// import { useState } from "react";
import { useEffect, useState } from 'react';

import CartHTML from './CartHTML';

function Cart() {
  
  const products = JSON.parse(localStorage.getItem('cart'))
  const [state,setState] = useState(products)

  // console.log(products)
  if(state == null){
    // const cartNull = document.querySelector('.cartNull')
    // const rightCart = document.querySelector('.detailCart .right')

    console.log('Cart Null')
    // rightCart.style.display = 'none'
    // cartNull.style.display = 'block'
  }
  function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
  
  function handleClickBuy(){
    alert('Order Success !!! Thanks bro ')
  }
  // total Prices
  // const productCart = document.querySelectorAll('.contentProductCart .total')
  if(products){
    var totals = products.reduce(function(accumulator,currentValue){
      const total = accumulator + currentValue.price
      return total
    },0)
  } 

  useEffect(()=>{
    

    function handleRemoveProductCart(){
      
      document.querySelectorAll('.imgClose').forEach((imgClose,indexClose)=>{
          imgClose.onclick = function(){
            const localCart = localStorage.getItem('cart')
            if(localCart){
              setState(products.splice(indexClose,1))
              localStorage.setItem('cart',JSON.stringify(products))
            }
          }
        
      })
    }
    handleRemoveProductCart()

  },[])
  return (
    <div className='detailCart'>
      
      <div className='left'> 
      
      {products.map((product)=>{
        return (
          < CartHTML product = {product}/>
        )
      })}
    </div>
      <div className='right'>
            <h1>SHOPPING CART</h1>
            <div className='infoUserCart'>
              <input alt='text' placeholder='FIRST NAME'></input>
              <input alt='text' placeholder='LAST NAME'></input>
              <input alt='number' placeholder='YOUR PHONE NUMBER'></input>
              <input alt='text' placeholder='ADDRESS'></input>
              <input alt='text' placeholder='NOTE'></input>
            </div>
            <div className="total">
              <div className="totalPrices">
                {/* <p>SHIPPING : 30k</p> */}
                <p>TOTAL PRICE : <span>{convertMoney(totals)}</span></p>
              </div>
              <button onClick={handleClickBuy}>BUY NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Cart