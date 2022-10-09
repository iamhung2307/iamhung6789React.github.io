import { Link } from 'react-router-dom';

import User from '../../user/User';
// img
import imgWomen from '../../../assets/img/products/women/sweaters/Blvck Letters Sweater.webp';
import imgMen from '../../../assets/img/products/men/shirts/Blvck Nylon Shirt 1.webp';
import imgAcc from '../../../assets/img/products/accessories/Blvck Drawing Pad.webp';
import imgCart from '../../../assets/img/icon/shoppingCart.png';
import imgNavMenu from '../../../assets/img/icon/menu.png';
import imgMenuClear from '../../../assets/img/icon/close.png';

// import '../../../styles/responsive.scss'
function Nav() {
  function handleClickMenu() {
    document.querySelector('.imgMenu').style.display = 'none';
    document.querySelector('.nav').classList.add('active');
    document.querySelector('.navMenu').style.display = 'block';
    document.querySelector('.bgNav').style.display = 'block';
    document.querySelector('.imgMenuClear').style.display = 'block';
  }
  function handleClickMenuClear() {
    document.querySelector('.bgNav').style.display = 'none';
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.navMenu').style.display = 'none';
    document.querySelector('.imgMenu').style.display = 'block';
    document.querySelector('.imgMenuClear').style.display = 'none';
  }
  // function handleClickLink(){
  //     document.querySelectorAll('.dropDownChild').style.display = 'block'
  // }
  function handleBgNav() {
    document.querySelector('.bgNav').style.display = 'none';
    document.querySelector('.nav').classList.remove('active');
    document.querySelector('.navMenu').style.display = 'none';
    document.querySelector('.imgMenu').style.display = 'block';
    document.querySelector('.imgMenuClear').style.display = 'none';
  }
  
  return (
    <>
      <div onClick={handleBgNav} className="bgNav"></div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </ul>
        <ul>
          <img
            alt=""
            className="imgMenu"
            onClick={handleClickMenu}
            src={imgNavMenu}
          ></img>
          <img
            alt=""
            className="imgMenuClear"
            onClick={handleClickMenuClear}
            src={imgMenuClear}
          ></img>
        </ul>
        <ul className="navMenu">
          <li>
            <Link to="/products">ALL PRODUCTS</Link>
          </li>
          <li className='nav-item'>
            <Link to="products/women">WOMEN</Link>
          </li>
          <li className='nav-item'>
            <Link to="products/men">MEN</Link>
          </li>
          <li className="dropDown">
            {/* <img alt="" className='imgAdd' onClick={handleClickLink} src={imgAdd}></img> */}
            <Link to="products/women">WOMEN</Link>
            <div className="dropDownChild">
              <ul className="linkDropDown">
                <Link to="products/hoodies">HOODIES</Link>
                <Link to="products/sweaters">SWEATERS</Link>
                <Link to="products/jackets">JACKETS</Link>
                <Link to="products/pants">PANTS</Link>
                <Link to="products/croped">CROPED</Link>
                <Link to="products/blaze">BLAZES</Link>
                <Link to="products/tees">TEES</Link>
              </ul>
              <div className="imgDropDown">
                <img alt="" src={imgWomen}></img>
                <img alt="" src={imgAcc}></img>
              </div>
            </div>
          </li>
          <li className="dropDown">
            {/* <img alt="" className='imgAdd' onClick={handleClickLink} src={imgAdd}></img> */}
            <Link to="products/men">MEN</Link>
            <div className="dropDownChild">
              <ul className="linkDropDown">
                <Link to="products/hoodies">HOODIES</Link>
                <Link to="products/sweaters">SWEATERS</Link>
                <Link to="products/jackets">JACKETS</Link>
                <Link to="products/pants">PANTS</Link>
                <Link to="products/tees">TEES</Link>
              </ul>
              <div className="imgDropDown">
                <img alt="" src={imgMen}></img>
                <img alt="" src={imgAcc}></img>
              </div>
            </div>
          </li>
          <li>
            <Link to="products/accessories">ACCESSORIES</Link>
          </li>
          <li>
            <Link to="products/contact">CONTACT</Link>
          </li>
          <li className="cartLink">
            <Link to="cart">CART</Link>
          </li>
          <li className="userLink">
            <Link to="login">USER</Link>
          </li>
        </ul>
          <ul >
            <li className='search'>
            <script async src="https://cse.google.com/cse.js?cx=c2052da58f6cd42ae">
            </script>
            <div class="gcse-search"></div>
            {/* <script async src="https://cse.google.com/cse.js?cx=500264203cf354af0">
            </script>
            <div class="gcse-search"><i class="fa-solid fa-magnifying-glass"></i></div> */}
              
            </li>
            <li className="navCart">
              <Link to="/cart">
               <i class="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <User />
          </ul>
        
      </div>
    </>
  );
}

export default Nav;
