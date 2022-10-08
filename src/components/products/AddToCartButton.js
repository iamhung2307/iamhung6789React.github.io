import React from 'react'
// import {useState} from 'react'
function AddToCartButton({products}) {
    // const [state,setState] = useState()
    // console.log(state)
    const addToCartClick = document.querySelector('.addToCartClick')
    function handleClick(){
        addToCartClick.style.display = 'block'
        setTimeout(()=>{
            addToCartClick.style.display = 'none'
        },3000)
        // const arr = new Array()
        const  localStore = localStorage.getItem('cart')
        // const id = localStore.map((localItem)=>{
        //     return localItem.id
        // })
        if(localStore ){
            const json = JSON.parse(localStore)
            json.push(products)
            localStorage.setItem('cart',JSON.stringify(json))

        }else{
            const json = JSON.stringify([products])
            localStorage.setItem('cart',json)
        }
    }
    
    return (
        <div className="addtocart">
            <button onClick={handleClick}>ADD TO CARD</button>
        </div>
    )
}

export default AddToCartButton