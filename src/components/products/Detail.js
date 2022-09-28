import React from "react";
// import Banner from "../banner";
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import Banner from "../banner";
import AddToCartButton from "./AddToCartButton";
import iconTichXanh from'../../img/icon/tichxanhicon.png'
import { useNavigate } from "react-router-dom";

function Detail() {
    const navigate = useNavigate();
    const {id} = useParams()
    // const Id = id * 1

    const [product, setProducts] = useState([]);

    const getProducts = async (page = 1, pageSize = 20) => {
        axios.get(`https://haiexpress.herokuapp.com/api/hung/products`, {
            params: { page, pageSize ,product : id},
        })
        .then((res) => {
            const product = res.data.data[0];
            setProducts(product);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        getProducts();
    },[]);
    function handleClickViewCart(){
        navigate("/cart");
    }
    return (
        <>
        <Banner />
        <div className="addToCartClick">
            <h5>{product.name} <img src={iconTichXanh}></img></h5>
            
        </div>
        <div className="productDetail" key={product.id}>  
            <div className="imgDetail">
                <div className="img1">
                <img src={product.images} alt="react"></img>
                    {/* {product.images.map((image) => {
                        return <img src={image} alt="react"></img>; 
                    })} */}
                </div>
                <div className="imgBottom">
                    <div className="img2">
                    <img src={product.images} alt="react"></img>
                    {/* {product.images.map((image) => {
                        return <img src={image} alt="react"></img>;
                    })} */}
                    </div>
                </div>
            </div>
            <div className="contentDetail">
                <h1>{product.name}</h1>
                <h3>{product.price}</h3>
                <div className="size">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                </div>
                <div className='amount'>

                    <input type='number' min='1' defaultValue='1'></input>

                </div>
                <div className='cart'>
                    < AddToCartButton product={product}/>
                <div className='viewCart'>
                        <button onClick={handleClickViewCart}>VIEW CART</button>
                    </div>
                </div>
                
                <div className="content">
                    <h6> * DESCRIPTION</h6>
                    <p>{product.description}</p>
                </div>
                <div className="content">
                    <h6> * SHIPPING AND RETURNS</h6>
                    <p>{product.description}</p>
                </div>
            </div>

            </div>
        
        </>
    )
    
}

export default Detail