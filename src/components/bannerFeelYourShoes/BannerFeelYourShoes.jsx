import React, { useEffect, useState } from 'react'
import './BannerFeelYourShoes.css'
import topImg from '../../assets/webImg/feelYourShoes.jpg'
import bannerImg from '../../assets/webImg/freeShipping.jpg'
import SneakersServices from '../../apiServices/SneakersServices'

function BannerFeelYourShoes() {
  const [sneakers, setSneakers] = useState([])

  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=>{setSneakers(data)
    })},[]);

  const isHighlight = (sneaker) => {
    for(let i = 0; i < sneakers.length; i++){
      if(!sneaker.highlights){
        return false
      }
      return sneaker
    }
  }
  const newSneakerArray = sneakers.filter(isHighlight);
  console.log(newSneakerArray);

  return (
    <>
    <div className='bannerFeel'>
      <img src={topImg} alt="BannerPrincipal" className='topImg'/>
      <h1 className='titleGalactica'>GALACTICA</h1>
      <div className='feelYourSection'>
        <h3 className='caption'>A NEW WAY TO FEEL YOUR <br/> SHOES</h3>
        <button className='roundTransparentBtn whiteBorder' id='shopNowButton'>SHOP NOW</button>
        <button className='roundTransparentBtn blackBorder' id='ourNowButton'>OUR TEAM</button>
      </div>
    </div>
    <div className='highlightSection'>
    {newSneakerArray.map((item)=>{
      return(
        <div className='highlightCard'>
          <img src={item.img} alt="Sneacker" className='highlightImg'/>
          <div className='highlightData'>
            <p className='highlightModel'>{item.model}</p>
            <div className='highlightInfo'>
              <p className='highlightPrice'>{item.price} €</p>
              <button className='roundTransparentBtn blackBorder buttonShop'>SHOP</button>
            </div>
          </div>
        </div>
      )})}
    </div>
    <div className='banner'>
      <img src={bannerImg} alt="Banner" className='bannerImg'/>
      <h1 className='upBanner'>WORLDWIDE FREE <br/> SHIPPING TAX</h1>
    </div>
    </>
  )
}

export default BannerFeelYourShoes
