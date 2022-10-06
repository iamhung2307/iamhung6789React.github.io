import React from 'react'
import { useState,useEffect } from 'react';
import imgLogoY from '../img/icon/logoY.jpg';

function ClickOnTop(){
    const [moveOnTop,setMoveOnTop] = useState(false);
    useEffect(()=>{
        function handleScroll(){
            setMoveOnTop(window.scrollY>200)
        }
        window.addEventListener('scroll',handleScroll)
        // clean up
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    return (
        <>
            
            {moveOnTop && ( 
                <a className='clickOnTop' href='#'
                    style={{
                        position:'fixed',
                        bottom:'20px',
                        right:'15px'
                    }}
                >
                    <img src={imgLogoY} alt='react' 
                        style={{
                            width:'50px',
                            borderRadius:'5px',
                            boxShadow:'1px 1px 5px 1px white',
                            zIndex:'10'
                        }}
                    ></img>
                </a>
            )}
            {/* {moveOnTop ? (document.querySelector('.nav').style.background='rgba(1, 1, 1, 0.666)'):(document.querySelector('.nav').style.background='rgba(255, 255, 255, 0.053)')} */}
        </>
    )
}

export default ClickOnTop;