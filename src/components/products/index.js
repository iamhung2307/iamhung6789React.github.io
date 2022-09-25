import React, { useState, useEffect } from "react";
import Banner from "../banner";
import axios from "axios";
import {Product} from "./Product";
export function AllProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = async (page = 1, pageSize = 20) => {
    
    axios.get(`https://haiexpress.herokuapp.com/api/hung/products`, {
        params: { page, pageSize }
      })
      .then((res) => {
        const product = res.data.data;
        setProducts(product);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <>
      <Banner/>
      <div className="allProducts">
      {products.map((product) => (
        <Product product={product} />
      ))}
      </div>
    </>
  );
}
