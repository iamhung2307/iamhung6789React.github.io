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
        checkPay.innerHTML = 'b???n ???? ch???n thanh to??n khi nh???n h??ng'
        
      }else if(index == 1){
        checkPay.innerHTML = 'B???n ???? ch???n thanh to??n b???ng th???'
        
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
        checkPay.innerHTML = 'Ph????ng th???c thanh to??n ??ang ???????c c???p nh???t. Vui l??ng quay l???i sau...'
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
        checkPay.innerHTML = 'Vui l??ng qu??t m?? ????? thanh to??n'
      }
      
    }
  })
  function handleClickBuyCart() {
    inputPay.forEach((check)=>{
      if(document.querySelector('.checkPay img.active')){
        document.querySelector('.checkPay img.active').classList.remove('active');
      }
      if(inputPay[0].checked){
        checkPay.innerHTML = "????n h??ng c???a b???n ???? ???????c x??c nh???n. Vui l??ng gi??? li??n l???c, ch??ng t??i s??? g???i ????n h??ng ?????n b???n trong th???i gian s???m nh???t. Thanks !!!"
      }else if(check.checked){
        checkPay.innerHTML ="????n h??ng c???a b???n ???? ???????c x??c nh???n. Vui l??ng gi??? li??n l???c, ch??ng t??i s??? th??ng b??o cho b???n n???u ????n h??ng ???????c thanh to??n th??nh c??ng. Thanks !!!"
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
                <p className='textCartNull'>Gi??? h??ng c???a b???n ??ang tr???ng...</p>
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
                <h6>Thanh To??n</h6>
                <div>
                  <input type='radio' name="drone"></input>
                  <p>thanh to??n khi nh???n h??ng</p>
                </div>
                <div>
                  <input type='radio' name="drone"></input>
                  <p>thanh to??n b???ng th???</p>
                </div>
                <div>
                  <input type='radio' name="drone" ></input>
                  <p>thanh to??n b???ng v?? ??i???n t???</p>
                </div>
                <div className='imgPay'>
                  <img src={imgMomo} ></img>
                  <img src={imgZaloPay}></img>
                  <img src={imgVNPay}></img>
                </div>
              </div>
              <div className='checkPay'>
                <p>Vui l??ng ch???n h??nh th???c thanh to??n</p>
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
