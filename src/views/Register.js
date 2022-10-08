import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// img
import imgLogin from '../assets/img/icon/imgLogin.png';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  function handleSignUp() {
    if (name == null) {
      alert('input your name , please');
    } else if (pass == null || confirmPass == null) {
      alert('input your password , please');
    } else if (pass != confirmPass) {
      alert('Account or password must be the same, please');
    } else if (pass == confirmPass) {
      alert(`Name : ${name}` + '     ' + `Password : ${pass} `);
      navigate('/login');
    }
    let user = {
      name,
      pass,
    };
    const json = JSON.stringify(user);
    localStorage.setItem(name, json);
  }

  return (
    <div className="bgLogin">
      <div className="login">
        <div>
          <img alt="" src={imgLogin}></img>
        </div>
        <div className="detailSignUp">
          <h3>Sign Up</h3>
          <input
            type="text"
            value={name}
            defaultValue={null}
            onChange={(e) => setName(e.target.value)}
            placeholder="your name"
          ></input>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="your password"
          ></input>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="confirm your password"
          ></input>
          <button onClick={handleSignUp}>SUBMIT</button>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
