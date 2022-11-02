import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import iconTichXanh from '../../assets/img/icon/tichxanhicon.png';
import { addToCart } from '../../redux/actions/cart';
import { convertMoney } from '../../utils';

import './products.scss';

export function Product({ product }) {
  // console.log(product)
  const dispatch = useDispatch();

  const addToCartClick = document.querySelector('.addToCartClick');
  // const [newValue,setNewValue] = useState()
  function handleClick() {
    if(product !== null){
      addToCartClick.style.display = 'block';
      setTimeout(() => {
        addToCartClick.style.display = 'none';
      }, 1000);

      dispatch(addToCart(product, 1)); 
    }
 
  }
  return (
    <>
      <div className="addToCartClick">
        <h5>
          ADD TO CART SUCCESSFULLY <img alt="" src={iconTichXanh}></img>
        </h5>
      </div>
      <div className={['product', product.sex, product.type].join(' ')}>
        <div className="img">
          {product.images.map((image) => {
            return <img alt="react" src={image}></img>;
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
