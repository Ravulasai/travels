import React from 'react';
import './index.css';
import { BsFillCartFill } from "react-icons/bs";
import {Link} from 'react-router-dom';

const Card = ({ imageName, itemName }) => {
  return (
    <div className="card">
      <img src={imageName} alt={itemName} className="card-image" />
      <h2 className="card-title">{itemName}</h2>
      <Link to ="/booking">  <button className="order-button">Order Now <BsFillCartFill /></button></Link>
    </div>
  );
}

const App = () => {
  return (
    <>
    <div className="card-container">
      <h1 className='head'>We are Providing Quality Materials</h1>
      <div className='card-row'>
     <Card
        imageName="/image1.jpeg"
        itemName="Kankara"
      />
      <Card
        imageName="/image2.jpeg"
        itemName="Garuku Isuka"
      />
      <Card
        imageName="/image3.jpeg"
        itemName="Ituka"
      />
      <Card
        imageName="/image2.jpeg"
        itemName="Bondu Isuka"
      />
      </div>
      <h1 className='card-footer'>Vijayawada Metal Available</h1>
    </div>
    </>
  );
}

export default App;
