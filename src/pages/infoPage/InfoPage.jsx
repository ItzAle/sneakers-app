import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import './InfoPage.css'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import SneakersServices from '../../apiServices/SneakersServices'

function InfoPage() {
    const[sneakerId, setSneakerId] = useState([])
    
    const {id} = useParams()

    useEffect(()=>{
      SneakersServices.getSneakerById(id)
        .then((data)=> setSneakerId(data))
    },[])

  return (
    <>
        <NavBar/>
        <div className='articleMain'>
            <div className='infoShoe' key={sneakerId.id}>
                <img className='imgShoe' src={sneakerId.img} alt="shoe" />
                <div className='infoShoeText'>
                    <h1 className='infoShoeBrand'>{sneakerId.brand}</h1>
                    <h3 className='infoShoeModel'>{sneakerId.model}</h3>
                    <p className='infoShoeInfo'>{sneakerId.description}</p>
                    <div className='buyBtnBox'>
                        <p className='infoShoePrice'>{sneakerId.price} €</p>
                        <button className='roundBlackBtn' id='buyBtn'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default InfoPage
