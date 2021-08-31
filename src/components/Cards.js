import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what is going on:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/event_01.jpg'
              text='This Mediterranean Rooftop Bottomless Brunch will transport you Straight to Spain'
              label='Food and Drinks'
              path='/services'
            />
            <CardItem
              src='images/event_02.jpg'
              text='Camping and Hiking in Wales Snowdonia. - Finishing with a BBQ'
              label='Sports'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/event_03.jpg'
              text='Online Yoga Class; Darwen Yoga, Meditation and Spirituality - All levels'
              label='Sports'
              path='/services'
            />
            <CardItem
              src='images/event_04.jpg'
              text='Weekend alert: enjoy 3 or 4 days in a hidden paradise outside the city.'
              label='Luxury'
              path='/products'
            />
            <CardItem
              src='images/event_05.jpg'
              text='Learn How To Make Perfect Pasta And Gorgeous Gin Cocktails - Free course'
              label='Food and Drinks'
              path='/sign-in'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/event_06.jpg'
              text='Enjoy the end of the summer at the largest pool party in London - Music and drinks'
              label='Music / Party'
              path='/services'
            />
            <CardItem
              src='images/event_09.jpg'
              text='Charity colour race - Run with your friends while listening best music'
              label='Sports / Party'
              path='/services'
            />
          </ul>
        </div>

      </div>
    
    </div>
  );
}

export default Cards;