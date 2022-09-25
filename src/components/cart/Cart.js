import React,{useEffect,useState} from 'react'
// import Banner from '../banner'

function Cart() {
  
  const [products, setProducts] = useState([]);
  console.log(products.name)
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('product'));
    if (products) {
    setProducts(products);
    }
  }, []);
  return (
    <>
    
    {/* <div className='bgTOP'></div> */}
    <div className='detailCart'>
      
      <div className='left'>
        <div className='imgCart'>
          <img src={products.img}></img>
        </div>
        <div className='detailProductCart'>
          <h5>{products.name}</h5>
          <h6>SIZE / {products.price}  </h6>
          <input alt='number' defaultValue={1}></input>
          <p className='totalPrice'> = {products.price} </p>
        </div>
      </div>
      <div className='right'>
        <div className='infoCart'>
          <h1>THÔNG TIN ĐƠN HÀNG</h1>
          <p>NAME</p>
          <input alt='text' placeholder='YOUR NAME'></input>
          <p>PHONE</p>
          <input alt='number' placeholder='YOUR PHONE NUMBER'></input>
          <p>ADDRESS</p>
          <input alt='text' placeholder='ADDRESS'></input>
          <p>NOTE</p>
          <input alt='text' placeholder='NOTE'></input>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart