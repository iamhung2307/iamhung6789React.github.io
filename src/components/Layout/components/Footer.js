import video from '../../../assets/img/video/footer_video.mp4';
import logo from '../../../assets/img/icon/logo.webp';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <video autoPlay loop muted width="80%">
          <source src={video}></source>
        </video>
      </div>
      <div className="right">
        <img alt="" src={logo}></img>
        <div className="iamhung">
          <p>Design By iamhung</p>
        </div>
      </div>
    </div>
  );
};
