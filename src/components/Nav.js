import {Link} from 'react-router-dom';

import User from './User';
// img
import imgWomen from '../img/products/women/sweaters/Blvck Letters Sweater.webp';
import imgMen from '../img/products/men/shirts/Blvck Nylon Shirt 1.webp';
import imgAcc from '../img/products/accessories/Blvck Drawing Pad.webp'
import imgCart from '../img/icon/shoppingCart.png'
import imgNavMenu from '../img/icon/menu.png'
import imgMenuClear from'../img/icon/close.png'
// import imgAdd from '../img/icon/add.png'
// import { womenClick } from './handleClick';

function Nav(){

    function handleClickMenu(){
        document.querySelector('.imgMenu').style.display = 'none'
        document.querySelector('.nav').classList.add('active')
        document.querySelector('.navMenu').style.display = 'block' 
        document.querySelector('.bgNav').style.display = 'block' 
        document.querySelector('.imgMenuClear').style.display = 'block'
    }
    function handleClickMenuClear(){
        document.querySelector('.bgNav').style.display = 'none'
        document.querySelector('.nav').classList.remove('active')
        document.querySelector('.navMenu').style.display = 'none' 
        document.querySelector('.imgMenu').style.display = 'block'
        document.querySelector('.imgMenuClear').style.display = 'none'
    }
    // function handleClickLink(){
    //     document.querySelectorAll('.dropDownChild').style.display = 'block'
    // }
    function handleBgNav(){
        document.querySelector('.bgNav').style.display = 'none'
        document.querySelector('.nav').classList.remove('active')
        document.querySelector('.navMenu').style.display = 'none' 
        document.querySelector('.imgMenu').style.display = 'block'
        document.querySelector('.imgMenuClear').style.display = 'none'
    }
    return (
        <>  
            <div onClick={handleBgNav} className='bgNav'></div>
            <div className="nav" >
                
                <ul>
                    <li><Link  to="/">HOME</Link></li>
                    {/* <li><Link  to="/ProductsDetail">ProductsDetail</Link></li> */}
                </ul> 
                <ul><img className='imgMenu' onClick={handleClickMenu} src={imgNavMenu}></img>
                    <img className='imgMenuClear' onClick={handleClickMenuClear} src={imgMenuClear}></img>
                </ul>
                <ul className='navMenu' >
                    <li><Link to="/products">ALL PRODUCTS</Link></li>
                    <li className='dropDown'>
                    {/* <img className='imgAdd' onClick={handleClickLink} src={imgAdd}></img> */}
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
                        {/* <img className='imgAdd' onClick={handleClickLink} src={imgAdd}></img> */}
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
                    <li className='cartLink'><Link to="cart">CART</Link></li>
                    <li className='userLink'><Link to="login">USER</Link></li>
                </ul>
                <div className='img'>
                <ul className='navCart'><li><Link to='/cart'><img src={imgCart}></img></Link></li></ul>
                    < User />
                </div>
            </div>
        </>
        
    )
}

export default Nav;