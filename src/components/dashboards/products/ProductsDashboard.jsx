import './ProductDashboard.css'
import React, { useEffect, useState } from 'react'
import SneakersServices from '../../../apiServices/SneakersServices'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";


function Dashboard() {
  
  const [sneakers, setSneakers] = useState([])

  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=>{setSneakers(data)
      
    })},[]);

  return (
    <div className='dashBoard'>
      <div className='addItem'>
        <button className='addItemBtn'>Add</button>
      </div>
      {sneakers.map((item)=>{
        return(
          <>
            <div className='dashBoardRow type1'>
              <p className='itemModel'>{item.model}</p>
              <p className='itemBrand'>{item.brand}</p>
              <p className='itemPrice'>{item.price}€</p>
              <p className='itemQuantity'>1</p>
              <FaPencilAlt/>
              <FaTrashAlt/>
            </div>

          </>
        )
      })}

    </div>
  )
}

export default Dashboard
