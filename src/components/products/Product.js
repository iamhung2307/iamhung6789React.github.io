import React from "react";
import {Link} from 'react-router-dom'

// import AddToCartButton from "./AddToCartButton";
import iconTichXanh from'../../img/icon/tichxanhicon.png'
export function Product({ product }) {
  const addToCartClick = document.querySelector('.addToCartClick')
  function handleClick(){
    
    addToCartClick.style.display = 'block'
        setTimeout(()=>{
            addToCartClick.style.display = 'none'
        },3000)
    const localStore = localStorage.getItem('cart')
    if(localStore){
        
        if(product.id){

          // quantity += 1 

        }else{
          const json = JSON.parse(localStore)
          json.push(product)
          localStorage.setItem('cart',JSON.stringify(json))
        }
        
    }else{
        const json = JSON.stringify([product])
        localStorage.setItem('cart',json)
    }
  }
  
  function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }

  return (
    <>
      <div className="addToCartClick">
            <h5>{product.name} <img src={iconTichXanh}></img></h5>
      </div>
      <div className={["product", product.sex, product.type].join(" ") }>
        <div className="img">

          {product.images.map((image) => {
            return (
              <img src={image} alt="react"></img>
            )
          })}
        </div>

        <div className="text">
          <Link to={`/products/${product.sex}/${product.id}`}><h5>{product.name}</h5></Link>
          <p>{convertMoney(product.price)}</p>
          <button onClick={handleClick}>ADD TO CART</button>
          
        </div>
      </div>
    </>
  );
}
