import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
// import {useState} from 'react'
function AddToCartButton({ product, quantity = 1 }) {
  
  const dispatch = useDispatch();
  const addToCartClick = document.querySelector('.addToCartClick');
  function handleClick() {
    addToCartClick.style.display = 'block';
    setTimeout(() => {
      addToCartClick.style.display = 'none';
    }, 2000);
    dispatch(addToCart(product, quantity));
    
  }
  const sizes = document.querySelectorAll('.size button')
    sizes.forEach((size)=>{
      size.onclick = function() {
        if(document.querySelector('.size button.active')){
          document.querySelector('.size button.active').classList.remove('active')
        }
        this.classList.add('active')
      }
    })
  return (
    <div className="addtocart">
      <button onClick={handleClick}>ADD TO CARD</button>
    </div>
  );
}

export default AddToCartButton;
