
import video from '../img/video/bannerVideo.mp4';
import videoMore1 from '../img/video/Phantoms.mp4'; 
import videoMore2 from '../img/video/Blvck Paris.mp4';
import Women from './Women';
import Men from './Men';
import Accessories from './Accessories';
// import { useEffect } from 'react';


function Home(){
    console.log(window.innerWidth)
    
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
                            {/* <button className="p-1"><a href="#">More...</a></button> */}
                        </div>
                    </section>
                </div>
            </div>
            
            <div className='homeMore'>
            <div className='homeMore2'>
                <section>
                    <div className='text'>
                        <h3>An Inside Look at Blvck Store</h3>
                        <p>The shop was built with the Blvck lifestyle aesthetic featuring black ice creams, a basket ball hoop, a coffee corner, a unique limited edition 1meter tall Blvck Teddy bear, alongside with the brand’s popular lifestyle accessories throughout the room.</p>
                        {/* <button className="p-1"><a href="#">More...</a></button> */}
                    </div>
                    <video controls>
                        <source src={videoMore2}></source>
                    </video>
                </section>
            </div>
        </div>
            
        </div>

        </>
    );
}

export default Home;