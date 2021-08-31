import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <image className='cover--photo' src="/public/images/cover-img.jpg"></image>
      <h1>GET READY!</h1>
      <p>We are what we do together</p>
      <div className="hero-btns">
         <Button
         className='btns'
         buttonStyle='btn--primary' 
         buttonSize='btn--large'>
           Let's get started! <i class="fas fa-chevron-right"></i></Button>
      </div>
    </div>
  )
}



export default HeroSection;

