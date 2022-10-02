
// import { Link } from 'react-router-dom';
import video from '../img/video/bannerVideo.mp4';
import videoMore1 from '../img/video/Phantoms.mp4'; 
import videoMore2 from '../img/video/Blvck Paris.mp4';
import Women from './Women';
import Men from './Men';
import Accessories from './Accessories';
// import Carousel from './slider/Slider';

// import { AllProducts } from './products';

// import { useEffect } from 'react';

import imgNoti1 from '../img/icon/stamp.png'
import imgNoti2 from '../img/icon/freeShipping.png'
import imgNoti3 from '../img/icon/support.png'
import imgNotiEvent from '../img/icon/notification.png'
import Sliders from './Slider';
// import imgLeftArrow from '../img/icon/leftArrow.png'
// import imgRightArrow from '../img/icon/rightArrow.png'
function Home(){
    
    
    const spans = document.querySelectorAll('.top span')
    const itemProducts = document.querySelectorAll('.content .itemProduct')

    spans.forEach((span,index) => {
        const itemProduct = itemProducts[index]
        span.onclick = function (){
            document.querySelector('.top span.active').classList.remove('active')
            document.querySelector('.content .itemProduct.active').classList.remove('active')
            
            this.classList.add('active')
            itemProduct.classList.add('active')
            
        }
    })
    // const handleClickLeftArrow = () => {
    //     document.querySelector('.sliderAllProduct').style.width = "-20%"
    // }
    // const handleClickRightArrow = () => {

    // }
    return (
        <>
        {/* <Navbar /> */}
        <div className="bannerVideo">
            <video autoPlay muted preload="auto" width="100%">
                <source src={video}/>
            </video>
        </div>
        <div className='homeProducts'>
            <div className='sliderTop'>
                <div className='top'>
                    <span>Men</span>
                    <p> - </p>
                    <span className='active'>Women</span>
                    <p> - </p>
                    <span  > Accessories </span>
                </div>
                <div className='content'>
                    <div className='itemProduct'>< Men /></div>
                    <div className='itemProduct active'>< Women /></div>
                    <div className='itemProduct'>< Accessories /></div>
                </div>
            </div>
            <div className='homeMore'>
                <div className='homeMore1'>
                    <section>
                        <video controls >
                            <source src={videoMore1}></source>
                        </video>
                        <div className='text'>
                            <h3>Blvck Genesis NFT Collection</h3>
                            <p>Proud to announce the Blvck Genesis NFT collection, a unique and never-seen-before NFT collection of avatars created by the lifestyle brand, Blvck Paris.</p>
                            {/* <button className="p-1"><Link to="">More...</Link></button> */}
                        </div>
                    </section>
                </div>
            </div>

            <div className='slider'>
                < Sliders />
            </div>
            <div className='noti'>
            <div className='notiBottom'>
                <img src={imgNotiEvent}></img>
                <div className='contentNoti-text'>
                    <span>Đăng kí nhận tin</span>
                    <p>đăng kí để nhận ngay những chương trình khuyễn mãi hot</p>
                </div>
                <div className='btnEmail'>
                    <input type='email' placeholder='your email'></input>
                    <button>Submit</button>
                </div>
            </div>
                
                
            </div>

            <div className='homeMore'>
            <div className='homeMore2'>
                <section>
                    <div className='text'>
                        <h3>An Inside Look at Blvck Store</h3>
                        <p>The shop was built with the Blvck lifestyle aesthetic featuring black ice creams, a basket ball hoop, a coffee corner, a unique limited edition 1meter tall Blvck Teddy bear, alongside with the brand’s popular lifestyle accessories throughout the room.</p>
                        {/* <button className="p-1"><Link to="">More...</Link></button> */}
                    </div>
                    <video controls>
                        <source src={videoMore2}></source>
                    </video>
                </section>
            </div>
        </div>
        <div className='noti'>
        <div className='notiTop'>
                
                <div className='contentNoti'>
                    <img src={imgNoti1}></img>
                    <div className='contentNoti-text'>
                        <p>sản phẩm</p>
                        <span>ĐỘC QUYỀN</span>
                    </div>
                </div>
                <div className='contentNoti'>
                    <img src={imgNoti2}></img>
                    <div className='contentNoti-text'>
                        <p>Miễn phí vận chuyển</p>
                        <span>TOÀN QUỐC</span>
                    </div>
                </div>
                <div className='contentNoti'>
                    <img src={imgNoti3}></img>
                    <div className='contentNoti-text'>
                        <p>hotline hỗ trợ</p>
                        <span>1900 1001</span>
                    </div>
                </div>
            </div>
        </div>  
        </div>

        </>
    );
}

export default Home;