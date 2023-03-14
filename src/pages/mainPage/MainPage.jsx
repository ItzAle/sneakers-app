import "./MainPage.css"
import Navbar from "../../components/navbar/Navbar"
import BannerFeelYourShoes from '../../components/bannerFeelYourShoes/BannerFeelYourShoes'
import BannerFreeShipping from '../../components/bannerFreeShipping/BannerFreeShipping'
import GalacticaTeam from '../../components/galacticaTeam/GalacticaTeam'
import BannerCircularity from '../../components/bannerCircularity/BannerCircularity'
import LinksFooter from '../../components/linksFooter/LinksFooter'


function MainPage() {
  return (    
    <div className='mainPage'>
      <Navbar/>
      <p>hola</p>
      <BannerFeelYourShoes/>
      <BannerFreeShipping/>
      <GalacticaTeam/>
      <BannerCircularity/>
      <LinksFooter/>
    </div>
   
  )
}

export default MainPage
