// import { useState } from "react";
// import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import CartItem from './cartItem';

import { convertMoney } from '../../utils';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// imgages Pay
import imgMomo from '../../assets/img/icon/logoMomo.svg'
import imgZaloPay from '../../assets/img/icon/logoZaloPay.svg'
import imgVNPay from '../../assets/img/icon/logoVNPay.svg'
import imgQrMomo from '../../assets/img/icon/logoMomo.svg'
function Cart() {
  
  const products = useSelector((store) => store.cart);
  // console.log(products)
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState()
  const [address,setAddress] = useState('')
 
  function handleFirstName(e){
   setFirstName(e.target.value)
  }
  function handleLastName(e){
    setLastName(e.target.value)
  }
  function handlePhoneNumber(e){
    setPhoneNumber(e.target.value)
  }
  function handleAddress(e){
    setAddress(e.target.value)
  }
   
  function handleClickBuy() {
    if(firstName == null || lastName == null || address == null || phoneNumber == null){
      alert('Complete all information, please')
    }else if(!(Number(phoneNumber))){
      alert('Check Your Phone Number, please')
    }else{
      document.querySelector('.order-confirmation').style.display = 'block'
    }
  }
  function handleBackToCart(){
    document.querySelector('.order-confirmation').style.display = 'none'

  }
  const totals = products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.order_quantity,
    0
  );
  function handleClickBuyCart(){
    alert("Thank you for your order. We will contact you soon, Let's keep in touch, pls !!!")
  }
  return (
    <>
    <div className='bgTop'></div>
      <div className="detailCart">
      <div className="left">
        {products.length === 0 && (
          <div className="cartNull">
            {/* <img src={imgCartNull}></img> */}
            <p className='textCartNull'>Giỏ hàng của bạn đang trống...</p>
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

            <input defaultValue={firstName} onChange={handleFirstName} placeholder="FIRST NAME" />
            <input defaultValue={lastName} onChange={handleLastName} placeholder="LAST NAME" />
            <input defaultValue={phoneNumber} onChange={handlePhoneNumber} placeholder="YOUR PHONE NUMBER" />
            <input defaultValue={address} onChange={handleAddress} placeholder="ADDRESS" />
            <input placeholder="NOTE"></input>
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
    <div className='order-confirmation' >
      
        <div className='content-confirm'>
        
          <div className='left'>
          
            <div>
              <p>Name : {`${firstName} ${lastName}`}</p>
              <p> Phone Number : {phoneNumber}</p>
              <p>Address : {address}</p>
              <p >Total Price : {convertMoney(totals)}</p>
            </div>
            <Link to='#' onClick={handleBackToCart}>Back to Cart</Link>
          </div>
          <div className='right'>
            <div className='top'>
              <p className='Title'>Order confirmation</p>
            </div>
            <div className='bottom'>
            <div className='pay'>
              <h6>Thanh Toán</h6>
              <div>
                <input type='radio'></input>
                <p>thanh toán khi nhận hàng</p>
              </div>
              <div>
                <input type='radio'></input>
                <p>thanh toán bằng thẻ</p>
              </div>
              <div className='imgPay'>
                <img src={imgMomo}></img>
                <img src={imgZaloPay}></img>
                <img src={imgVNPay}></img>
              </div>
            </div>
            <div className='checkPay'>
              {/* <img alt='QR Code Momo' src={imgQrMomo}></img> */}
              <p>nơi chứa thông tin thanh toán</p>
            </div>  
              <button onClick={handleClickBuyCart}>Buy Now</button>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Cart;
