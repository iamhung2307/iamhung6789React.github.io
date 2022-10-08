import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Women from './Women';
import Men from './Men';
import Accessories from './Accessories';
import Contact from './Contact';
import {AllProducts} from "./products";
import Detail from './products/Detail';
import Cart from './cart/Cart';

// footer
import video from '../img/video/footer_video.mp4'
import logo from '../img/icon/logo.webp'
import Nav from './Nav';

import ClickOnTop from './ClickOnTop';
import Login from './login/Login';
import Register from './login/Register';


function App (){
    
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="products" element={<AllProducts />}></Route>
                <Route path="products/women" element={<Women />}></Route>
                <Route path="products/men" element={<Men />}></Route>
                <Route path="products/accessories" element={<Accessories />}></Route>
                <Route path="products/contact" element={<Contact />}></Route>
                {/* <Route path="Detail" exact element={<AllProducts />}></Route> */}
                <Route path="products/:name/:id" exact element={<Detail />}></Route>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*"element={<div><h2>404 Page not found</h2></div>} />
            </Routes>

            {/* footer */}
            <div className="footer">
            <div className="left">
                <video autoPlay loop muted width="80%">
                    <source src={video}></source>
                </video>
            </div>
            <div className="right">
                <img src={logo} alt='react'></img>
                <div className="iamhung">
                    <p>Design By iamhung</p>
                </div>
            </div>
            </div>
            < ClickOnTop />
            
        </>
    )
}   

export default App;