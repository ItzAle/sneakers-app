import React, { useEffect, useState } from 'react'
import SneakersServices from '../../apiServices/SneakersServices';
import { Link } from 'react-router-dom'
import "./HighlightSection.css"

function HighlightSection() {

  const [highLights, setHighLights] = useState([])

  useEffect(()=>{
    SneakersServices.findAllHighLights()
    .then((data)=>{setHighLights(data)})
  },[]);
  
  return (
    <div className='highlightSection'>
    {highLights.map((item)=>{
      return(
        <Link to={`/infoShoe/${item.id}`} key={item.id}>
          <div className='highlightCard' >
            <img src={item.img} alt="Sneacker" className='highlightImg'/>
            <div className='highlightData' >
              <p className='highlightModel'>{item.model}</p>
              <div className='highlightInfo' >
                <p className='highlightPrice'>{item.price} €</p>
                <button className='roundTransparentBtn blackBorder buttonShop'>SHOP</button>
              </div>
            </div>
          </div>
        </Link>
      )})}
    </div>
  )
}

export default HighlightSection
