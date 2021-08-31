import React from 'react'
import InfoAbout from '../InfoAbout'
import { homeObjOne, homeObjTwo, homeObjThree } from '../Data';
import Footer from '../Footer';
import Pricing from '../Pricing';


function About() {

  return (
    <>
    <div>
      <InfoAbout {...homeObjOne} />
      <InfoAbout {...homeObjThree} />
      <InfoAbout {...homeObjTwo} />
      <Pricing />
      <Footer />

    </div>
    </>
  )
}

export default About;
