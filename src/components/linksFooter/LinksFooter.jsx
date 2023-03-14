import React from 'react'
import { FaInstagram, FaFacebookF, FaMapMarkedAlt } from "react-icons/fa";
import './LinksFooter.css'

function LinksFooter() {
  return (
    <div className='linksFooter'>
        <button className='stayInTheKnowBtn'>STAY IN THE KNOW</button>
      <div className='linksBox'>
        <div className='firstColumn'>
          <p className='textLinkBox'>GET IN TOUCH</p>
          <p className='textLinkBox'>DELIVERY & RETURNS</p>
          <p className='textLinkBox'>TERMS & CONDITIONS</p>
          <p className='textLinkBox'>PRIVACY & POLICY</p>
          <p className='textLinkBox'>COOKIE POLICY</p>
          <p className='textLinkBox'>FAQS</p>
          <p className='textLinkBox topVoid'>ADMIN PANEL</p>
        </div>
        <div className='secondColumn'>
          <p className='textLinkBox'><FaInstagram className='iconLink'/>INSTAGRAM</p>
          <p className='textLinkBox'><FaFacebookF className='iconLink'/>FACEBOOK</p>
          <p className='textLinkBox topVoid'><FaMapMarkedAlt className='iconLink'/>BARCELONA, SPAIN</p>
        </div>
        <div className='thirdColumn'>
          <p className='textLinkBox'>GALACTICA, SL</p>
          <p className='textLinkBox'>COMPANY NO.12026354</p>
          <p className='textLinkBox'>&#169; 2023 GALACTICA,SL</p>
        </div>
      </div>
    </div>
  )
}

export default LinksFooter
