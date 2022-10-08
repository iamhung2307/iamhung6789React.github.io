import React,{  useState }  from 'react'


import imgClose from '../../img/icon/close.png'

function CartHTML({product}) {

    const [onChanges,setOnchanges] = useState(1)

    function convertMoney(num) {
        return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    
  return (

    <div className="contentProductCart">
        <div className='detailCartMini'>
            <div className='imgCart'>
            <img src={product.images} alt="react"></img>
            </div>
            <div className='detailProductCart'>
            <h5>{product.name}</h5>
            <h6 className='totalPrice'>{convertMoney(product.price * onChanges) }</h6> 
            <div>
                <input type='number' min='1' onChange={(value)=>setOnchanges(value.target.value)} defaultValue='1'></input>
            </div>
            {/* <p className='totalPrice'> = {convertMoney(totals)} </p> */}
            </div>
        </div>
        <div className='imgClose'>
            <img src={imgClose} ></img>
        </div>
    </div>
   
)
}

export default CartHTML