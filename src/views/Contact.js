import imgContact from '../assets/img/icon/rocket.png';
import imgAddress from '../assets/img/icon/location.png';
import imgPhone from '../assets/img/icon/phone.png';
import imgEmail from '../assets/img/icon/email.png';

// social network img
import imgTiktok from '../assets/img/icon/tiktok.png';
import imgZalo from '../assets/img/icon/zalo.png';
import imgFb from '../assets/img/icon/facebook.png';
import imgInstagram from '../assets/img/icon/instagram.png';

import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contactForm">
      <div className="contactContent">
        <div className="leftContent">
          <div className="leftContentTop">
            <h3>Contact Info</h3>
            <p>
              <img alt="" src={imgPhone}></img>PHONE
            </p>
            <p>
              <img alt="" src={imgEmail}></img>EMAIL
            </p>
            <p>
              <img alt="" src={imgAddress}></img>ADDRESS
            </p>
          </div>
          <div className="leftContentBot">
            <Link to="">
              <img alt="" src={imgTiktok}></img>
            </Link>
            <Link to="">
              <img alt="" src={imgFb}></img>
            </Link>
            <Link to="">
              <img alt="" src={imgZalo}></img>
            </Link>
            <Link to="">
              <img alt="" src={imgInstagram}></img>
            </Link>
          </div>
        </div>
        <div className="rightContent">
          <h3>Send a Message</h3>
          <div className="name">
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
          </div>
          <div className="info">
            <input type="email" placeholder="Your Email Address"></input>
            <input type="text" placeholder="Your Phone Number"></input>
          </div>
          <div className="note">
            <input type="text" placeholder="Write your message here"></input>
          </div>
          <button>SEND</button>
          <div className="imgBot">
            <img alt="" src={imgContact}></img>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Contact;
