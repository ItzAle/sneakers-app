import React from 'react'
import Image from '../../assets/webImg/circularity.jpg'
import './BannerCircularity.css'

function BannerCircularity() {
  return (
    <div className='bannerCircularity' id='circularity'>
      <div className='circularityImgBox'>
        <img id='imgCircularity' src={Image} alt="Oa"/>
      </div>
      <div className='circularityTextBox'>
        <p className='h1Circularity'>CIRCULARITY</p>
        <p className='h5Circularity'>We make sure that our shoes are designed to be completely reused when you’re finished with them. We turn the fabrics into compost and grind up the soles to use in the next generation of Galactica shoes.</p>
        <button className='roundTransparentBtn whiteBorder' id='knowMoreBtn'>KNOW MORE</button>
      </div>
    </div>
  )
}

export default BannerCircularity
