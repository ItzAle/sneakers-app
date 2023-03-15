import React, { useEffect, useState } from 'react'
import './ShopPage.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import SneakersServices from '../../apiServices/SneakersServices'

export default function ShopPage() {

  const [snikers, setSnikers] = useState([])

  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=>{setSnikers(data)
    })},[]);

  return (
    <>
    <Navbar/>
    <div className='shopPage'>
      {snikers.map((item) =>{
        return(
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
      )})}
    </div>
    <Footer/>
    </>
    
  )
}

