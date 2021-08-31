import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import '../components/Pricing.css'




function Pricing() {
    return (

        <div>
            <div className="pricing__section">
            <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>🎉 Become a sponsor 🎉</h1>
            <div className="pricing__container">
                <Link to="/signin" className="pricing__container-card">
                <div className='pricing__container-cardInfo'>
                <div className='icon'>

                </div>
                <i class="fas fa-mug-hot"></i>
                <h3>Coffee Plan</h3>
                <h4>£120</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>1 BANNER in our website</li>
                  <li>1 POST in our Social Networks</li>
                  
                </ul>
                <Button buttonSize='btn--large' buttonColor='btn--primary'>
                  Choose it!
                </Button>
              </div>
             </Link>


             <Link to="/signin" className="pricing__container-card">
                <div className='pricing__container-cardInfo'>
                <div className='icon'>

                </div>
                <i class="fas fa-glass-martini-alt"></i>
                <h3>Cocktail Plan</h3>
                <h4>£350</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>1 BANNER in our website</li>
                  <li>2 POSTS in our Social Networks</li>
                  <li>1 FREE EVENT post/month</li>
                </ul>
                <Button buttonSize='btn--large' buttonColor='btn--primary'>
                  Choose it!
                </Button>
              </div>
             </Link>


             <Link to="/signin" className="pricing__container-card">
                <div className='pricing__container-cardInfo'>
                <div className='icon'>
 
                </div>
                <i class="fas fa-wine-glass-alt"></i>
                <h3>Wine Plan</h3>
                <h4>£750</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>1 BANNER in our website</li>
                  <li>4 POSTS in our Social Networks</li>
                  <li>4 FREE EVENTS post/month</li>
                </ul>
                <Button buttonSize='btn--large' buttonColor='btn--primary'>
                  Choose it!
                </Button>
              </div>
             </Link>


            </div>
            </div> 
            </div>
        </div>

    )
}

export default Pricing
