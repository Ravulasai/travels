import React from 'react';
import './index.css';
import Card from '../Cards'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { TbFiretruck } from "react-icons/tb";

const Header = () => {
    return (
        <div>
            <Navbar/>
            <div className='header-container'>
                <h1 className='head mt-5'>AISHWARYA TRANSPORTS</h1>
                <p className='text'>Providing Quality Building Materials to your door step</p>
               <div className='truck mt-3'> <TbFiretruck  size={50} style={{color:'orangered'}} /></div>
            <div className='img-container'>
                <img src='/image1.jpeg' alt='' className='img-header'/>
                <img src='/image3.jpeg' alt='' className='img-header'/>
                <img src='/image2.jpeg' alt='' className='img-header'/>
            </div>
            <h1 className='footer'>Contact</h1>
            <h4 className='footer-content'>Bellamkonda Sathish: 9505161183 </h4>
            <h4 className='footer-content'>Bellamkonda Srinu: 9989132251</h4>
            </div>
            <div className=''>
                <Card/>
            </div>
            <Footer/>
        </div>
    );
}

export default Header;
