import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  changeCartQuantity,
  deleteCartProduct,
} from '../../redux/actions/cart';
import { convertMoney } from '../../utils';

import imgClose from '../../assets/img/icon/close.png';

function CartItem({ product }) {
  const dispatch = useDispatch();

  const handleRemoveProduct = () => {
    dispatch(deleteCartProduct(product.id));
  };

  return (
    <div className="contentProductCart">
      <div className="detailCartMini">
        <div className="imgCart">
          <img alt="" src={product.images}></img>
        </div>
        <div className="detailProductCart">
          <h5>{product.name}</h5>
          
          <h6 className="totalPrice">
            {convertMoney(product.price * product.order_quantity)}
          </h6>
          <div>
            <input
              type="number"
              min="1"
              onChange={(value) =>
                dispatch(changeCartQuantity(product.id, value.target.value))
              }
              defaultValue={product.order_quantity}
            />
          </div>
        </div>
      </div>
      <div className="imgClose">
        <img alt="" src={imgClose} onClick={handleRemoveProduct}></img>
      </div>
    </div>
  );
}

export default CartItem;
