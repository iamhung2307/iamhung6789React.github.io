import imgContact from '../img/icon/rocket.png'
import imgAddress from '../img/icon/location.png'
import imgPhone from '../img/icon/phone.png'
import imgEmail from '../img/icon/email.png'

// social network img
import imgTiktok from '../img/icon/tiktok.png'
import imgZalo from '../img/icon/zalo.png'
import imgFb from '../img/icon/facebook.png'
import imgInstagram from '../img/icon/instagram.png'

import { Link } from 'react-router-dom'

function Contact(){
    return (
        <div className="contactForm">
            <div className="contactContent">
                <div className="leftContent">
                    <div className='leftContentTop'>
                        <h3>Contact Info</h3>
                        <p><img src={imgPhone}></img>PHONE</p>
                        <p><img src={imgEmail}></img>EMAIL</p>
                        <p><img src={imgAddress}></img>ADDRESS</p>
                    </div>
                    <div className='leftContentBot'>
                        <Link to=''><img src={imgTiktok}></img></Link>
                        <Link to=''><img src={imgFb}></img></Link>
                        <Link to=''><img src={imgZalo}></img></Link>
                        <Link to=''><img src={imgInstagram}></img></Link> 
                    </div>
                </div>
                <div className="rightContent">
                    <h3>Send a Message</h3>
                    <div className='name'>
                        <input type='text' placeholder='First Name'></input>
                        <input type='text' placeholder='Last Name'></input>
                    </div>
                    <div className='info'>
                        <input type ='email' placeholder='Your Email Address'></input>
                        <input type ='text' placeholder='Your Phone Number'></input>
                    </div>
                    <div className='note'>
                        <input type ='text' placeholder='Write your message here'></input>
                    </div>
                    <button>SEND</button>
                </div>
                <div className='imgBot'>
                    <img src={imgContact}></img>
                </div>
                
            </div>
            
        </div>
    );
}

export default Contact;