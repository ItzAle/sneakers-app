import React from 'react'
import Image from '../../assets/webImg/circularity.jpg'

function BannerCircularity() {
  return (
    <div className='bannerCircularity'>
      <div className='circularityImg'>
        <img src={Image}/>
      </div>
      <div className='circularityText'>
        <h1 className='h1Circularity'>CIRCULARITY</h1>
        <h5 className='h5Circularity'>We make sure that our shoes are designed to be completely reused when you’re finished with them. We turn the fabrics into compost and grind up the soles to use in the next generation of Galactica shoes.</h5>
        <button className='knowMoreBtn'>KNOW MORE</button>
      </div>
    </div>
  )
}

export default BannerCircularity
