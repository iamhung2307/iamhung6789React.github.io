import { Link } from 'react-router-dom';

import User from '../../user/User';
// img
import imgWomen from '../../../assets/img/products/women/sweaters/Blvck Letters Sweater.webp';
import imgMen from '../../../assets/img/products/men/shirts/Blvck Nylon Shirt 1.webp';
import imgAcc from '../../../assets/img/products/accessories/Blvck Drawing Pad.webp';

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
          <div
            className="imgMenu"
            onClick={handleClickMenu}
          >
            <i class="fa-solid fa-bars"></i>
          </div>
          <div
            className="imgMenuClear"
            onClick={handleClickMenuClear}
            
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
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
                <Link to="products/women/hoodies">HOODIES</Link>
                <Link to="products/women/sweaters">SWEATERS</Link>
                <Link to="products/women/jackets">JACKETS</Link>
                <Link to="products/women/pants">PANTS</Link>
                <Link to="products/women/croped">CROPED</Link>
                <Link to="products/women/blaze">BLAZES</Link>
                <Link to="products/women/tees">TEES</Link>
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
                <Link to="products/men/hoodies">HOODIES</Link>
                <Link to="products/men/sweaters">SWEATERS</Link>
                <Link to="products/men/jackets">JACKETS</Link>
                <Link to="products/men/pants">PANTS</Link>
                <Link to="products/men/tees">TEES</Link>
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
            <Link to="contact">CONTACT</Link>
          </li>
   
        </ul>
          <ul className='nav-right'>
            <li className='search'>
            <script async src="https://cse.google.com/cse.js?cx=c2052da58f6cd42ae">
            </script>
            <div class="gcse-search"><i class="fa-solid fa-magnifying-glass"></i></div>
              
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
