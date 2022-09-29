// import { useState } from "react";
import { useEffect, useState } from 'react';
import imgClose from '../../img/icon/close.png'

function Cart() {
  const products = JSON.parse(localStorage.getItem('cart'))
  const [state,setState] = useState(products)
  
  function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
  function handleClickBuy(){
    alert('Order Success !!! Thanks bro ')
  }

  
  useEffect(()=>{
    function handleRemoveProductCart(){
      
        document.querySelectorAll('.imgClose').forEach((imgClose,indexClose)=>{
            imgClose.onclick = function(){
              
              if(localStorage.getItem('cart')){
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
            <div className="contentProductCart">
              <div className='detailCartMini'>
                <div className='imgCart'>
                  {/* <img src={products.images}></img> */}
                  <img src={product.images} alt="react"></img>
                </div>
                <div className='detailProductCart'>
                  <h5>{product.name}</h5>
                  <h6>SIZE / {convertMoney(product.price)}</h6>
                  <input type='number' defaultValue={1}></input>
                  <p className='totalPrice'> = {convertMoney(product.price)} </p>
                </div>
              </div>
              <div className='imgClose'>
                <img src={imgClose} ></img>
              </div>
            </div>
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
            <div className="totalPrice">
              <p>SHIPPING : 30k</p>
              <p>TOTAL PRICE : <span>31k</span></p>
            </div>
            <button onClick={handleClickBuy}>BUY NOW</button>
          </div>
      </div>
    </div>
  ) 
  

}

export default Cart