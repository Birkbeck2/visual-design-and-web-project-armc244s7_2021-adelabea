import React, { useState } from 'react';
import './Form.css';
import FormSuccess from './FormSuccess';
import FormSignin from './FormSignin';





const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
   
    function submitForm() {
        setIsSubmitted(true);
      }


    return (
      <div>
        {!isSubmitted ? (
        <FormSignin submitForm={submitForm} />) : 
        (<FormSuccess />)}

      </div>

    );
};

export default Form;
