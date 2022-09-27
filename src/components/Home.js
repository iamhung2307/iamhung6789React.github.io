
import video from '../img/video/bannerVideo.mp4';
import videoMore1 from '../img/video/Phantoms.mp4'; 
import videoMore2 from '../img/video/Blvck Paris.mp4';
import Women from './Women';
import Men from './Men';
import Accessories from './Accessories';


function Home(){
    // function handle(){
    //     const content = document.querySelector('.sliderTop .content')
    //     // for(let i=0;i< 3;i++){
    //         console.log(content)
    //     // }
    // }
    // handle()
    // (sliderProduct => (
    //     // sliderProduct.addEventListener ('click',function(){
    //     //     alert(this)
    //     // })
    //     console.log(sliderProduct)
    // ))
    function handleMen(){
        // alert('men')
        // document.querySelector('.content div').style.display = 'none'
        
        document.querySelector('.sliderProductWomen').style.display = 'none'
        document.querySelector('.sliderProductAccessories').style.display = 'none'
        document.querySelector('.sliderProductMen').style.display = 'flex'
        document.querySelector('.sliderProductMen').style.opacity = 1
    };
    function handleWomen(){
        // alert('women')
        // document.querySelector('.content div').style.display = 'none'
        
        document.querySelector('.sliderProductMen').style.display = 'none'
        document.querySelector('.sliderProductAccessories').style.display = 'none'
        document.querySelector('.sliderProductWomen').style.display = 'flex'
    };
    function handleAccessories(){
        // alert('acc')
        // document.querySelector('.content div').style.display = 'none'
       
        document.querySelector('.sliderProductMen').style.display = 'none'
        document.querySelector('.sliderProductWomen').style.display = 'none'
        document.querySelector('.sliderProductAccessories').style.display = 'flex'
    };
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
                    <span onClick={handleMen}>Men</span>
                    <p> - </p>
                    <span className='women' onClick={handleWomen}>Women</span>
                    <p> - </p>
                    <span onClick={handleAccessories}> Accessories </span>
                </div>
                <div className='content'>
                    <div className='sliderProductMen'>< Men /></div>
                    <div className='sliderProductWomen'>< Women /></div>
                    <div className='sliderProductAccessories'>< Accessories /></div>
                </div>
            </div>
            <div className='homeMore'>
                <div className='homeMore1'>
                    <section>
                        <video controls >
                            <source src={videoMore1}></source>
                        </video>
                        <div>
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
                    <div>
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