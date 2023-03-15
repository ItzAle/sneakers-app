import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import './InfoPage.css'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import SneakersServices from '../../apiServices/SneakersServices'

function InfoPage() {
    const[sneakerId, setSneakerId] = useState([])
    const {uuid} = useParams()
    useEffect(()=>{
      SneakersServices.getSneakerById(uuid)
        // .then((data)=> setSneakerId(data))
        .then((data)=> console.log(data))
  
    },[])

  return (
    <>
        <NavBar/>
        <div className='articleMain'>
            <div className='infoShoe' key={sneakerId.uuid}>
                <img className='imgShoe' src='https://www.tint-store.com/de-de/Data/Images/Big/adidas-originals-forum-low-weiss-schwarz-fy7757-lifestyle_right_back.jpg' alt="shoe" />
                <div className='infoShoeText'>
                    <h1 className='infoShoeBrand'>{sneakerId.brand}hola</h1>
                    <h3 className='infoShoeModel'>{sneakerId.model}hola</h3>
                    <p className='infoShoeInfo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit asperiores quas animi consequuntur nostrum commodi eligendi labore dolorem praesentium? Dolore nostrum aspernatur obcaecati hic mollitia consequatur iure quasi voluptas!</p>
                    <div className='buyBtnBox'>
                        <p className='infoShoePrice'>{sneakerId.price}92 €</p>
                        <button className='buyBtn'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default InfoPage
