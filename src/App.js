import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import Home from './components/Home';
import Booking from './components/Booking';
import Header from './components/Header';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route exact path='/' Component={Header}/>
      <Route exact path='/booking' Component={Booking}/>
    </Routes>
   </Router>
  );
};

export default App;
