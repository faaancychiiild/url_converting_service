import React from 'react';
import '../App.css';

const NavBar = ({signup}) => {
  return (
    <div className="nav-wrapper">
      <h1>Lynx</h1>
      <button onClick={signup} className="btn btn-light float-right"><i className="bi bi-person"></i>Create Account</button>
      
      <button className="btn btn-white float-right">Sign In</button>
      
    </div>
);
}
export default NavBar;
