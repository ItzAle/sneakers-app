import React, { useEffect, useState } from 'react'
import './ShopPage.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import SneakersServices from '../../apiServices/SneakersServices'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

export default function ShopPage() {

  const [sneakers, setSneakers] = useState([]);
  const [heart, setHeart] = useState (true);

  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=>{setSneakers(data)
        // .then((data)=>{console.log(data)

    })},[]);

  return (
    <>
    <Navbar/>
    <div className='CategorySelect'>
      <Link to="/shop"><p className='options'>All Categories</p></Link>
      <Link to="/"><p className='options'>Adults</p></Link>
      <Link to="/"><p className='options'>Kids</p></Link>
    </div>
    <div className='lineBlack'></div>
    <div className='shopPage'>
      {sneakers.map((item) =>{
        return(
          <div className='productCard'>
            <Icon icon="mdi:cards-heart" width="29" height="29" className='iconHeart' />
            <Icon icon="material-symbols:shopping-cart-checkout"  width="31" height="31" className='iconShop' />
            <Link to={`/infoShoe/${item.id}`}>
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
            </Link>
          </div>
          
      )})}
    </div>
    <Footer/>
    </>
    
  )
}

