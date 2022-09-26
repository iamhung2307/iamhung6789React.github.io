import React from 'react'

function AddToCartButton({products}) {
    const addToCartClick = document.querySelector('.addToCartClick')
    function handleClick(){
        addToCartClick.style.display = 'block'
        setTimeout(()=>{
            addToCartClick.style.display = 'none'
        },3000)
        const json = JSON.stringify(products)
        localStorage.setItem(products.id,json)
    }
    
    return (
        
        <div className="addtocart">
            <button onClick={handleClick}>ADD TO CARD</button>
        </div>

    )
}

export default AddToCartButton