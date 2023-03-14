import NavBar from '../../components/navbar/Navbar'
import './InfoPage.css'
import SneakersServices from '../../apiServices/SneakersServices'
import { useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function InfoPage() {
    const[sneakerId, setSneakerId] = useState([])

    const {uuid} = useParams()

    useEffect(()=>{
      SneakersServices.getSneakerById(uuid)
        .then((data)=> setSneakerId(data))
        // .then((data)=> console.log(data))
  
    },[])
    
  return (
    <>
        {/* <NavBar/> */}
        <div className='articleMain'>
            <div className='infoShoe' key={sneakerId.uuid}>
                <img className='imgShoe' src={sneakerId.img} alt="shoe" />
                <div>
                    <h1>{sneakerId.brand}</h1>
                    <h3>{sneakerId.model}</h3>
                    <p>{sneakerId.price} €</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit fugit asperiores quas animi consequuntur 
                        nostrum commodi eligendi labore dolorem praesentium? Dolore 
                        nostrum aspernatur obcaecati hic mollitia consequatur iure quasi 
                        voluptas!</p>
                    <div className='buyShoe'>
                        <button className='buyButton'>COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoPage
