
import video from '../img/video/bannerVideo.mp4';
import videoMore1 from '../img/video/Phantoms.mp4'; 
import videoMore2 from '../img/video/Blvck Paris.mp4';
import Women from './Women';
import Men from './Men';
import Accessories from './Accessories';


function Home(){
    
    return (
        <>
        {/* <Navbar /> */}
        <div className="bannerVideo">
            <video autoPlay muted preload="auto" width="100%">
                <source src={video}/>
            </video>
        </div>
       
        <div className='homeProducts'>
            <div className='homeProducts-Women'>
                <div className='left'>
                    <h5>WOMEN</h5>
                </div>
                <div className='right'>
                    <Women />
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
            <div className='homeProducts-Men'>
                <div className='left'>
                    <Men />
                </div>
                <div className='right'>
                    <h5>MEN</h5>
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
            <div className='homeProducts-Accessories'>
                <div className='left'>
                    <h5>ACCESSORIES</h5>
                </div>
                <div className='right'>
                    <Accessories />
                </div>
            </div>
        </div>
        
        {/* <Footer /> */}
        </>
    );
}

export default Home;