import React from 'react'

function ProductDetail({product}) {
  return (
    <div>
        <div className="productDetail" key={product.id}>  
            <div className="imgDetail">
                <div className="img1">
                    {product.images.map((image) => {
                        return (
                            <img src={image} alt="react"></img>
                        )
                    })}
                </div>

                <div className="imgBottom">
                    <div className="img2">
                        {product.images.map((image) => {
                            return (
                                <img src={image} alt="react"></img>
                            )
                        })}
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

                

                {/* <div className="addtocart">
                    <button>ADD TO CARD</button>
                </div>
                <div className="content">
                    <h6> * DESCRIPTION</h6>
                    <p>{product.description}</p>
                </div>
                <div className="content">
                    <h6> * SHIPPING AND RETURNS</h6>
                    <p>{product.description}</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ProductDetail