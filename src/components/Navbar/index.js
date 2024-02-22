import React from 'react';
import './Navbar.css'; 
import {Link} from 'react-router-dom'
import { BsFillCartFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'> <img src="https://res.cloudinary.com/djtr6bvr2/image/upload/v1706935950/i-1_oi7wf8.jpg" alt="Logo" className='logo-img'/></Link>
      </div>
      <div className="navbar-buttons">
        <button className="order-now-button mr-3" style={{background:'black'}}><IoCall /><a href="tel:+919505161183">Call Now</a></button>
       <Link to='/booking'><button className="order-now-button">Order Now <BsFillCartFill /></button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
