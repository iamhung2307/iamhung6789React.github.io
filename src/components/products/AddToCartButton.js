import React from 'react';
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
    }, 3000);
    
    dispatch(addToCart(product, quantity));
  }

  return (
    <div className="addtocart">
      <button onClick={handleClick}>ADD TO CARD</button>
    </div>
  );
}

export default AddToCartButton;
