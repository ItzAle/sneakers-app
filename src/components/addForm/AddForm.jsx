import React from 'react'
import './AddForm.css'
import { AiOutlineClose } from "react-icons/ai";

function AddForm() {
  return (
    <div className='addForm'>
        <AiOutlineClose className='closeForm'/>
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
            
            <button className='addFormBtn'>Add product</button>
        </div>
    </div>
  )
}

export default AddForm
