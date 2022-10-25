import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// img
import imgLogin from '../assets/img/icon/imgLogin.png';

export default function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [pass, setPass] = useState();

  function handleLogin() {
    const json = JSON.parse(localStorage.getItem(name));
    if (name == null || pass == null) {
      alert('Enter your Account or Password, Please');
    } else if (name === json.name && pass === json.pass) {
      navigate('/');
      document.querySelector('.user1').style.display = 'none';
      document.querySelector('.user2').style.display = 'block';
      document
        .querySelector('.user2 img')
        .setAttribute('title', `Hello ${name} ! Have a nice day`);
    } else {
      alert('Password incorrect, Please try again');
    }
  }
  return (
    <div className="bgLogin">
      <div className='margin'>
      <div className="login">
        <div>
        
          <img alt="" src={imgLogin}></img>
        </div>
        <div className="detailLogin">
          <h3>Sign in to website</h3>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your account name"
          ></input>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="your password"
          ></input>
          <button onClick={handleLogin}>LOGIN</button>
          <Link to="">
            <p>For got your password</p>
          </Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
      </div>
    </div>
  );
}
