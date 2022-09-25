import React from 'react'
import {Link} from 'react-router-dom';

// img 
import imgLogin from '../img/icon/user2.png'
import imgUser from '../img/icon/user4.png'

export default function User() {
    function handleClick(){
        document.querySelector('.user1').style.display='block';
        document.querySelector('.user2').style.display='none'
    }
  return (
    <>
        <div className='user1'>
            <ul style={{marginRight:'150px'}}>
                <li>
                    <Link  to="/login"><img src={imgLogin}></img></Link> 
                </li>
            </ul> 
        </div>
        <div className='user2'>
        <ul style={{marginRight:'150px'}} >
                <li>
                    <img src={imgUser} ></img>
                    <Link to='/' onClick={handleClick}>Log out</Link>
                </li>
            </ul> 
        </div>
    </>
  )
}
