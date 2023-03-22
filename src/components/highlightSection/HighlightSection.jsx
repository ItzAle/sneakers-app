import React, { useEffect, useState } from 'react'
import SneakersServices from '../../apiServices/SneakersServices';
import { Link } from 'react-router-dom'
import "./HighlightSection.css"

function HighlightSection() {

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

  return (
    <div className='highlightSection'>
    {newSneakerArray.map((item)=>{
      return(
        <Link to={`/infoShoe/${item.id}`}>
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
        </Link>
      )})}
    </div>
  )
}

export default HighlightSection
