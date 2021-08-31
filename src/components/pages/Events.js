import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import Button from '../Button';


function Events() {
  return (
    <>
      <Cards />
      <div className='button-container'>
        <Button
         className='btns'
         buttonStyle='btn--outline--2' 
         buttonSize='btn--large'> Login to look for more events
        </Button></div>

      <Footer />
    </>
  );
}



export default Events;