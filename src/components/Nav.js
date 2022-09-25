import {Link} from 'react-router-dom';
import imgWomen from '../img/products/women/sweaters/Blvck Letters Sweater.webp';
import imgMen from '../img/products/men/shirts/Blvck Nylon Shirt 1.webp';
import imgAcc from '../img/products/accessories/Blvck Drawing Pad.webp'
import imgCart from '../img/icon/shoppingCart.png'
import User from './User';
// import { womenClick } from './handleClick';

function Nav(){
    
    return (
        <>
            <div className="nav" >
                <ul>
                    <li><Link  to="/">HOME</Link></li>
                    {/* <li><Link  to="/ProductsDetail">ProductsDetail</Link></li> */}
                </ul> 
                <ul>
                    <li><Link to="/products">ALL PRODUCTS</Link></li>
                    <li className='dropDown'>
                        <Link to="products/women">WOMEN</Link>
                        <div className='dropDownChild'>
                            
                            <ul className='linkDropDown'>
                                <Link to="products/hoodies">HOODIES</Link>
                                <Link to="products/sweaters">SWEATERS</Link>
                                <Link to="products/jackets">JACKETS</Link>
                                <Link to="products/pants">PANTS</Link>
                                <Link to="products/croped">CROPED</Link>
                                <Link to="products/blaze">BLAZES</Link>
                                <Link to="products/tees">TEES</Link>
                            </ul>
                            <div className='imgDropDown'>
                                <img src={imgWomen} alt="react"></img>
                                <img src={imgAcc} alt="react"></img>
                            </div>
                        </div>
                    </li>
                    <li className='dropDown'>
                        <Link to="products/men">MEN</Link>
                        <div className='dropDownChild'>
                            
                            <ul className='linkDropDown'>
                                <Link to="products/hoodies">HOODIES</Link>
                                <Link to="products/sweaters">SWEATERS</Link>
                                <Link to="products/jackets">JACKETS</Link>
                                <Link to="products/pants">PANTS</Link>
                                <Link to="products/tees">TEES</Link>
                            </ul>
                            <div className='imgDropDown'>
                                <img src={imgMen} alt="react"></img>
                                <img src={imgAcc} alt="react"></img>
                            </div>
                        </div>
                    </li>
                    <li><Link to="products/accessories">ACCESSORIES</Link></li>
                    
                    <li><Link to="products/contact">CONTACT</Link></li>
                </ul>
                <div className='img'>
                <ul><li><Link to='/cart'><img src={imgCart}></img></Link></li></ul>
                < User />
                
                </div>
            </div>
        </>
        
    )
}

export default Nav;