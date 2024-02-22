import React,{useState} from 'react';
import './index.css'
import { FiX } from 'react-icons/fi';
import { toast, Toaster } from "react-hot-toast";
import { BsFillCartFill } from "react-icons/bs";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Booking Successfull")
    setFormData({name:'',mobile:''})
  };

  const handleGoBack = () => {
    window.history.back();
  };


  return (
    <div className='booking-container'>
    <div onClick={handleGoBack} style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <FiX size={40}/>
    </div>
    <div className="App">
    <Toaster toastOptions={{ duration: 5000 }} />
      <div className="card-booking">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className='label'>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className='label'>Mobile No:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className='btn-booking'>Order Now <BsFillCartFill /></button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Booking;
