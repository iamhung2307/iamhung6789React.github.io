
import { useEffect } from "react";
import {AllProducts} from "./products";


function Women(){
    useEffect(()=>{
        document.querySelector('h1').innerHTML = 'WOMEN';
    })

    return (

        <div className="Women">
            < AllProducts />
            
        </div>

    )
    
}

export default Women;