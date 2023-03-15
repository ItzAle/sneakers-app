import React, { useEffect, useState } from 'react'
import './ShopPage.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import SneakersServices from '../../apiServices/SneakersServices'
import { Link } from 'react-router-dom'

export default function ShopPage() {

  const [sneakers, setSneakers] = useState([])

  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=>{setSneakers(data)
    })},[]);

  return (
    <>
    <Navbar/>
    <div className='shopPage'>
      {sneakers.map((item) =>{
        return(
          <Link to={`/infoShoe/:${item.uuid}`}>
            <div className='productCard'>
              <div className='imgBox'>
                <img className='productImg' src={item.img} alt="Product" />
              </div>
              <div className='productInfo'>
                <h3 className='model'>{item.model}</h3>
                <p className='brand'>{item.brand}</p>
                <div className='priceBox'>
                  <p className='price'>{item.price}€</p>
                </div>
              </div>
            </div>
          </Link>
      )})}
    </div>
    <Footer/>
    </>
    
  )
}

