import React from 'react';
import { Link } from 'react-router-dom';

import iconTichXanh from '../../assets/img/icon/tichxanhicon.png';

import './products.scss';

export function Product({ product }) {
  const addToCartClick = document.querySelector('.addToCartClick');
  // const [newValue,setNewValue] = useState()
  function handleClick() {
    addToCartClick.style.display = 'block';
    setTimeout(() => {
      addToCartClick.style.display = 'none';
    }, 3000);

    const localStore = localStorage.getItem('cart');
    if (localStore) {
      const json = JSON.parse(localStore);
      json.push(product);
      localStorage.setItem('cart', JSON.stringify(json));
    } else {
      const json = JSON.stringify([product]);
      localStorage.setItem('cart', json);
    }
  }
  function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
  }

  return (
    <>
      <div className="addToCartClick">
        <h5>
          {product.name} <img alt="" src={iconTichXanh}></img>
        </h5>
      </div>
      <div className={['product', product.sex, product.type].join(' ')}>
        <div className="img">
          {product.images.map((image) => {
            return <img alt="" src={image} style={{ width: '380px' }}></img>;
          })}
        </div>

        <div className="text">
          <Link to={`/products/${product.sex}/${product.id}`}>
            <h5>{product.name}</h5>
          </Link>
          <p>{convertMoney(product.price)}</p>
          <button onClick={handleClick}>ADD TO CART</button>
        </div>
      </div>
    </>
  );
}
