import React from "react";
import {Link} from 'react-router-dom'
export function Product({ product }) {
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
        <p>{product.price}</p>
      </div>
    </div>
  );
}
