import { useEffect } from "react";
import {AllProducts} from "./products";

function Men(){
    useEffect(()=>{
        document.querySelector('h1').innerHTML = 'MEN';
    })
    return (
        <div className="Men">
            < AllProducts />
        </div>
    );
}

export default Men;