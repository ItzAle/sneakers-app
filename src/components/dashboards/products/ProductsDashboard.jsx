import './ProductDashboard.css'
import React, { useEffect, useState } from 'react'
import SneakersServices from '../../../apiServices/SneakersServices'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


function Dashboard() {
  
  const [sneakers, setSneakers] = useState([])

  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=>{setSneakers(data)
      
    })},[]);

  const showForm = () =>{
    const form = document.querySelector('.addForm')
    form.style.display = 'block';
  }
  
  const hideForm = () => {
    const form = document.querySelector('.addForm')
    form.style.display = 'none';
  }

  return (
    <div className='dashBoard'>
      <div className='addItem'>
        <button className='roundBlackBtn' id='addItemBtn' onClick={showForm}>Add</button>
        
        <div className='addForm'>
        <AiOutlineClose className='closeForm' onClick={hideForm}/>
        <p className='titleForm'>To add a product, the following information is requested:</p>
        <div className='dataForm'>
            <label for="brandForm">Product brand:</label>
            <input type="text" id="brandForm" className='inputForm'/>
            <label for="modelForm">Product model:</label>
            <input type="text" id="modelForm" className='inputForm'/>
            <label for="priceForm">Product price:</label>
            <input type="text" id="priceForm" className='inputForm'/>
            <label for="imgForm">Product image:</label>
            <input type="text" id="imgForm" className='inputForm'/>
            <label for="descriptionForm">Product description:</label>
            <input type="text" id="descriptionForm" className='inputForm'/>
            <button className='roundBlackBtn' id='addFormBtn'>Add product</button>
        </div>
    </div>
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
