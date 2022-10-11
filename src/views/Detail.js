import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/banners';
import AddToCartButton from '../components/products/AddToCartButton';
import iconTichXanh from '../assets/img/icon/tichxanhicon.png';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../apis/products';

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  console.log(products)
  const getAllProducts = async (page = 1, pageSize = 20) => {
    try {
      const res = await getProducts({ page, pageSize, product: id });
      const product = res.data.data[0];
      setProducts(product);
      
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProducts();

  }, []);
  function handleClickViewCart() {
    navigate('/cart');
  }
    


  return (
    <>
      <Banner />
      <div className="addToCartClick">
        <h5>
          {products.name} <img alt="" src={iconTichXanh}></img>
        </h5>
      </div>
      <div className="productDetail" key={products.id}>
        <div className="imgDetail">
          <div className="img1">
            <img alt="" src={products.images}></img>
            {/* {products.images.map((image) => {
                        return <img alt="" src={image} ></img>; 
                    })} */}
          </div>
          <div className="imgBottom">
            <div className="img2">
              <img alt="" src={products.images}></img>
              {/* {products.images.map((image) => {
                        return <img alt="" src={image} ></img>;
                    })} */}
            </div>
          </div>
        </div>
        <div className="contentDetail">
          <h1>{products.name}</h1>
          <h3>{products.price}</h3>
          <div className="size">
            <button value={'S'}>S</button>
            <button value={'M'}>M</button>
            <button value={'L'}>L</button>
          </div>
          <div className="amount">
            <input type="number" min="1" defaultValue="1" />
          </div>
          <div className="cart">
            <AddToCartButton products={products} />
            <div className="viewCart">
              <button onClick={handleClickViewCart}>VIEW CART</button>
            </div>
          </div>

          <div className="content">
            <h6> * DESCRIPTION</h6>
            <p>{products.description}</p>
          </div>
          <div className="content">
            <h6> * SHIPPING AND RETURNS</h6>
            <p>{products.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
