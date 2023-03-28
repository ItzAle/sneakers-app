import React, { useEffect, useState } from 'react'
import './ShopPage.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import SneakersServices from '../../apiServices/SneakersServices'
import { useParams} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

export default function ShopPage() {

    const [sneakers, setSneakers] = useState([]);
    useEffect(()=>{
      SneakersServices.getAllSneakers()
        .then((data)=>{setSneakers(data)})
      },[]);

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
      SneakersServices.getAllSneakersCategories()
      .then((data)=>{setCategories(data)})
    },[])

    const showItems = () => {

    }

    // const [sneakersByCategory, setSneakersByCategory] = useState([]);
    // const {id} = useParams()
    // useEffect(()=>{
    //   SneakersServices.findSneakersByCategory(1)
    //   .then((data)=>{setSneakersByCategory(data)})
    //   },[])

    //   console.log(sneakersByCategory);
    
  return (
    <>
    <Navbar/>
    <div className='categorySelect'>
      <Link to="/shop"><p className='options'>All Categories</p></Link>
      {categories.map((item)=>{
        return(
          <p className='options' key={item.id}>{item.name}</p>
        )
      })}
    </div>
    <div className='shopPage'>
      {sneakers.map((item) =>{
        return(
          <div className='productCard' key={item.id}>
            <Icon icon="mdi:cards-heart" className='iconHeart' />
            <Icon icon="material-symbols:shopping-cart-checkout" className='iconShop' />
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

