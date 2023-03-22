import React from 'react'
import bannerImg from '../../assets/webImg/freeShipping.jpg'
import './BannerFreeShipping.css'

function BannerFreeShipping() {
  return (
    <div className='banner'>
      <img src={bannerImg} alt="Banner" className='bannerImg' />
      <h1 className='upBanner'>WORLDWIDE FREE <br /> SHIPPING TAX</h1>
    </div>
  )
}

export default BannerFreeShipping
