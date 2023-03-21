import React, { useEffect, useState } from 'react'
import SneakersServices from '../../../apiServices/SneakersServices'
import { AiOutlineClose } from "react-icons/ai";
import "./AddForm.css";


function AddForm() {

    const categoryModel = {
        name : "",
        id : "",
    };

    const [categories, setCategories] = useState([categoryModel]);
    useEffect(()=>{
        SneakersServices.getAllSneakersCategories()
          .then((data)=>{setCategories(data)})
        },[]);

    const showForm = () =>{
        const form = document.querySelector('.addForm')
        form.style.display = 'block';
    }
    
    const hideForm = () => {
        const form = document.querySelector('.addForm')
        form.style.display = 'none';
    }

    return (
        <div className='addItem'>
            <button className='roundBlackBtn' id='addItemBtn' onClick={showForm}>Add</button>
            <div className='addForm'>
                <AiOutlineClose className='closeForm' onClick={hideForm}/>
                <p className='titleForm'>To add a product, the following information is requested:</p>
                
                {categories && categories[0].name}

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
                    <label for="categoryForm">Product category:</label>
                        <select name='categoryForm' id='categoryForm' className='inputForm'>
                        {categories.map(categoryName=>{
                            return (
                                <option value={categoryName.name} key={categoryName.id}>{categoryName.name}</option>
                            )
                        })}
                        </select>
                    <button className='roundBlackBtn' id='addFormBtn'>Add product</button>
                </div>
            </div>
        </div>
    )
}

export default AddForm
