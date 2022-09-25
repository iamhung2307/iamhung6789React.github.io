import {AllProducts} from "./products";
import { useEffect } from "react";
function Accessories(){

    useEffect(()=>{
        document.querySelector('h1').innerHTML = 'ACCESSORIES';
    })
    return (
        <div className="Accessories">
            <AllProducts />
        </div>
    );
}

export default Accessories;