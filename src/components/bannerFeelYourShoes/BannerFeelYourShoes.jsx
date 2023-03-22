import './BannerFeelYourShoes.css'
import topImg from '../../assets/webImg/feelYourShoes.jpg'
import HighlightSection from '../highlightSection/HighlightSection'

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
    </>
  )
}

export default BannerFeelYourShoes
