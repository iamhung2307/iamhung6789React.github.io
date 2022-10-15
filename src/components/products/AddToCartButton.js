import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
// import {useState} from 'react'
function AddToCartButton({ products, quantity = 1 }) {
  const [size,setSize] = useState('S');
  const dispatch = useDispatch();
  const addToCartClick = document.querySelector('.addToCartClick');
  function handleClick() {
    addToCartClick.style.display = 'block';
    setTimeout(() => {
      addToCartClick.style.display = 'none';
    }, 2000);
    if(products){
      dispatch(addToCart(products, quantity,size));
    }
  }
  document.querySelectorAll('.size button').forEach((size)=>{
    size.onclick = function() {
      if(document.querySelector('.size button.active')){
        document.querySelector('.size button.active').classList.remove('active')
      }
      this.classList.add('active')
      setSize(this.value)
      
    }
  }) 
  
  return (
    <div className="addtocart">
      <button onClick={handleClick}>ADD TO CARD</button>
    </div>
  );
}

export default AddToCartButton;
