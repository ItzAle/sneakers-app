import React from 'react'
import './BannerFeelYourShoes.css'
import topImg from '../../assets/webImg/feelYourShoes.jpg'
import bannerImg from '../../assets/webImg/freeShipping.jpg'

function BannerFeelYourShoes() {
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
    <div className='trendSection'>
      <article className='articleSnickers'>
        <img src="https://www.tint-store.com/de-de/Data/Images/Big/adidas-originals-forum-low-weiss-schwarz-fy7757-lifestyle_right_back.jpg" alt="Snicker" className='articleImg'/>
        <div className='containerInfo'>
          <div className='infoAndPrice'>
            <p className='titleArticle'>FORUM LOW</p>
            <p className='priceArticle'>$110</p>
          </div>
          <button className='roundTransparentBtn blackBorder buttonShop'>SHOP</button>

        </div>
      </article>
      <article className='articleSnickers'>
        <img src="https://assets.adidas.com/images/w_600,f_auto,q_auto/87e278ebf8cf4706a3bda7fa00e450a5_9366/Busenitz_Pro_Schuh_Schwarz_G48060_01_standard.jpg" alt="Snicker" className='articleImg'/>
        <div className='containerInfo'>
          <div className='infoAndPrice'>
            <p className='titleArticle'>BUSENITZ</p>
            <p>$130</p>
          </div>
          <button className='roundTransparentBtn blackBorder buttonShop'>SHOP</button>
        </div>
      </article>
    </div>
    <div className='banner'>
      <img src={bannerImg} alt="Banner" className='bannerImg'/>
      <h1 className='upBanner'>WORLDWIDE FREE <br/> SHIPPING TAX</h1>
    </div>
    </>
  )
}

export default BannerFeelYourShoes
