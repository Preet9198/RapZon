import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer bg-black'>
      <div className = "container py-4 text-center">
        
        <span className='text-white copyright-text text-manrope fs-14 fw-3'>&copy;2023 RapZon Store.</span>
        <span className='text-orange'> All Rights Reserved</span>
        
      </div>
     
    </footer>
  )
}

export default Footer     