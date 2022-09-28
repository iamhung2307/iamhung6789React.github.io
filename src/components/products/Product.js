import React from "react";
import {Link} from 'react-router-dom'

import AddToCartButton from "./AddToCartButton";

export function Product({ product }) {
  function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }
  return (
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
        < AddToCartButton product={product}/>
      </div>
    </div>
  );
}
