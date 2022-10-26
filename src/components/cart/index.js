// import { useState } from "react";
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CartItem from './cartItem';

import { convertMoney } from '../../utils';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// imgages Pay
import imgMomo from '../../assets/img/icon/logoMomo.svg'
import imgZaloPay from '../../assets/img/icon/logoZaloPay.svg'
import imgVNPay from '../../assets/img/icon/logoVNPay.svg'
import imgQRMomo from '../../assets/img/icon/imgQRMomo.jpg'
import imgQRZalopay from '../../assets/img/icon/imgQRZalopay.jpg'
// import imgQRVNPAY from '../../assets/img/icon/imgQRVNPAY.jpg'
function Cart() {

  const products = useSelector((store) => store.cart);
  // console.log(products)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState()
  const [address, setAddress] = useState('')

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }
  function handleLastName(e) {
    setLastName(e.target.value)
  }
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value)
  }
  function handleAddress(e) {
    setAddress(e.target.value)
  }

  function handleClickBuy() {
    if (firstName == null || lastName == null || address == null || phoneNumber == null) {
      alert('Complete all information, please')
    } else if (!(Number(phoneNumber))) {
      alert('Check Your Phone Number, please')
    } else {
      document.querySelector('.order-confirmation').style.display = 'block'
    }
  }
  function handleBackToCart() {
    document.querySelector('.order-confirmation').style.display = 'none'

  }
  const totals = products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.order_quantity,
    0
  );
  

  // handle Pay
  const inputPay = document.querySelectorAll('.pay input')
  const imgPay = document.querySelectorAll('.imgPay img')
  const checkPay = document.querySelector('.checkPay p')
  const imgQRs = document.querySelectorAll('.checkPay img')
  // const imgQR = 
  const isCheckedPay = [...inputPay, ...imgPay]
  isCheckedPay.forEach((isChecked, index) => {
    
    isChecked.onclick = function () {
      if (index == 0) {
        checkPay.innerHTML = 'bạn đã chọn thanh toán khi nhận hàng'
        
      }else if(index == 1){
        checkPay.innerHTML = 'Bạn đã chọn thanh toán bằng thẻ'
        
      }else if(index==2){
        document.querySelector('.imgPay').style.display='flex'
        checkPay.innerHTML = ' '
      }else if(index==3){
        if(document.querySelector('.checkPay img.active')){
          document.querySelector('.checkPay img.active').classList.remove('active');
        }
        imgQRs[0].classList.add('active')
      }else if(index==4){
        if(document.querySelector('.checkPay img.active')){
          document.querySelector('.checkPay img.active').classList.remove('active');
        }
        imgQRs[1].classList.add('active')
      }else if(index==5){
        checkPay.innerHTML = 'Phương thức thanh toán đang được cập nhật. Vui lòng quay lại sau...'
        if(document.querySelector('.checkPay img.active')){
          document.querySelector('.checkPay img.active').classList.remove('active');
        }        
        // imgQRs[2].classList.add('active')
      }
      if(index ==0 || index ==1 ){
        if(document.querySelector('.checkPay img.active')){
          document.querySelector('.checkPay img.active').classList.remove('active');
        }
        document.querySelector('.imgPay').style.display='none'
      }else if(index==3||index==4){
        checkPay.innerHTML = 'Vui lòng quét mã để thanh toán'
      }
      
    }
  })
  function handleClickBuyCart() {
    inputPay.forEach((check)=>{
      if(document.querySelector('.checkPay img.active')){
        document.querySelector('.checkPay img.active').classList.remove('active');
      }
      if(inputPay[0].checked){
        checkPay.innerHTML = "Đơn hàng của bạn đã được xác nhận. Vui lòng giữ liên lạc, chúng tôi sẽ gửi đơn hàng đến bạn trong thời gian sớm nhất. Thanks !!!"
      }else if(check.checked){
        checkPay.innerHTML ="Đơn hàng của bạn đã được xác nhận. Vui lòng giữ liên lạc, chúng tôi sẽ thông báo cho bạn nếu đơn hàng được thanh toán thành công. Thanks !!!"
      }
    })
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
            <>
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
            
            </>
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
                  <input type='radio' name="drone"></input>
                  <p>thanh toán khi nhận hàng</p>
                </div>
                <div>
                  <input type='radio' name="drone"></input>
                  <p>thanh toán bằng thẻ</p>
                </div>
                <div>
                  <input type='radio' name="drone" ></input>
                  <p>thanh toán bằng ví điện tử</p>
                </div>
                <div className='imgPay'>
                  <img src={imgMomo} ></img>
                  <img src={imgZaloPay}></img>
                  <img src={imgVNPay}></img>
                </div>
              </div>
              <div className='checkPay'>
                <p>Vui lòng chọn hình thức thanh toán</p>
                <img src={imgQRMomo} className='imgQRMomo' ></img>
                <img src={imgQRZalopay} className='imgQRZalopay' ></img>
                {/* <img src={imgQRVNPAY} className='imgQRVNPAY' ></img> */}
                
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
