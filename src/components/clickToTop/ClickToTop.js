import React from 'react';
import { useState, useEffect } from 'react';
import imgLogoY from '../../assets/img/icon/logoY.jpg';

export default function ClickToTop() {
  const [moveOnTop, setMoveOnTop] = useState(false);
  
  useEffect(() => {
    function handleScroll() {
      setMoveOnTop(window.scrollY > 200)
      if(window.scrollY > 200){
        document.querySelector('.nav').classList.add('background')
      }else{
        document.querySelector('.nav').classList.remove('background')
      }
    }

    window.addEventListener('scroll', handleScroll);
    // clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {moveOnTop && (
        <a
          className="clickOnTop"
          href="/#"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '15px',
          }}
        >
          <img
            alt=""
            src={imgLogoY}
            style={{
              width: '50px',
              borderRadius: '5px',
              boxShadow: '1px 1px 5px 1px white',
              zIndex: '10',
            }}
          ></img>
        </a>
        
      )}
      
    </>
  );
}
