import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import Navbar from "../../components/navbar/Navbar"
import { Link } from 'react-router-dom'
import SneakersServices from '../../apiServices/SneakersServices'


function MainPage() {
  const[sneakers, setSneakers] = useState([])
  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=> setSneakers(data))
      // .then((data)=> console.log(data))

  },[])

  return (    
    <div className='mainPage'>
      <Navbar/>
  
      {sneakers.map((item)=>{
        return (
          <Link to={`/infoShoe/${item.uuid}`}>
            <div className='productCard' key={item.uuid}>
              <div className='imgBox'>
                <img className='productImg'  src={item.img} alt="Product" /> 
              </div>
              <div className='productInfo'>
                <h3 className='model'>{item.model}</h3>
                <h5 className='brand'>{item.brand}</h5>
                <p className='price'>{item.price} €</p>
              </div>
            </div>
          </Link>
        )})}

    </div>
   
  )
}

export default MainPage
