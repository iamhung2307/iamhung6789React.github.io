import React, { useState, useEffect } from 'react';
import Banner from '../banners';

import { Product } from './Product';
import { getProducts } from '../../apis/products';

export function AllProducts({ category, limit }) {
  const [products, setProducts] = useState([]);

  const getAllProducts = async (page = 1, pageSize = 20) => {
    try {
      const res = await getProducts({ page, pageSize, gender: category });
      if (res.data?.data) {
        const product = res.data.data;
        setProducts(product);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts(1, limit);
  }, []);

  return (
    <>
      <Banner title={category} />
      <div className="allProducts">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
}
