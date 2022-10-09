import React from 'react';
import { Link } from 'react-router-dom';


export default function User() {
  function handleClick() {
    document.querySelector('.user1').style.display = 'block';
    document.querySelector('.user2').style.display = 'none';
  }
  return (
    <>

      <li className="user1 user">
        <Link to="/login">
          <i class="fa-regular fa-user"></i>
        </Link>
      </li>
      <li className="user2 user">
        <i class="fa-solid fa-user"></i>
        <Link to="/" onClick={handleClick}>
          Log out
        </Link>
      </li>
    </>
  );
}
