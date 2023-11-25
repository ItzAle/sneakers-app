import './BannerFeelYourShoes.css'
import topImg from '../../assets/webImg/feelYourShoes.jpg'
import { Link } from 'react-router-dom'

function BannerFeelYourShoes() {
  return (
    <div className='bannerFeel'>
      <img src={topImg} alt="BannerPrincipal" className='topImg' />
      <div className='feelYourSection'>
        <h3 className='caption'>A NEW WAY TO FEEL YOUR <br /> SHOES</h3>
        <Link to={"/shop"}>
          <button className='roundTransparentBtn whiteBorder pointerCursor' id='shopNowButton'>SHOP NOW</button>
        </Link>
        <button className='roundTransparentBtn blackBorder' id='ourNowButton'>OUR TEAM</button>
      </div>
    </div>
  )
}

export default BannerFeelYourShoes
