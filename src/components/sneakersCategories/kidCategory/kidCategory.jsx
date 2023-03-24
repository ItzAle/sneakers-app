import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import SneakersServices from '../../../apiServices/SneakersServices'
import { Link } from 'react-router-dom'

function KidCategory() {

  const [kidSneakers, setKidSneakers] = useState([]);

  useEffect(() => {
    SneakersServices.getKidSneakers()
      .then((data) => { setKidSneakers(data) })
      .then((data) => { console.log(data); })
  }, []);

  return (
    <>
     {kidSneakers.map((item) =>{
        return(
          <div className='productCard'>
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
    </>
  )
}

export default KidCategory
