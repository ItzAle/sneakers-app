import React, { useEffect, useState } from 'react'
import SneakersServices from '../../../apiServices/SneakersServices'
import { AiOutlineClose } from "react-icons/ai";
import "./AddForm.css";


function AddForm() {

    const categoryModel = {
        name : "",
        id : "",
    };
    const sneakerModel = {
        brand : "",
        model : "",
        price : "",
        img : "",
        description : "",
        highlights : "",
        categoryId : "1"
    }

    const [categories, setCategories] = useState([categoryModel]);
    const [sneaker, setSneaker] = useState([sneakerModel]);

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

    const handleSneakerChange = (e) =>{
        let name = e.target.name;
        setSneaker({ 
            ...sneaker, 
            [name] : e.target.value 
        })
    }
    const handleCategoryChange = (e) =>{
        const id =  e.target.name;
        setSneaker({
            ...sneaker,
            [id] : e.target.value
        })
    } 
    const handleSubmit = (e) =>{
        e.preventDefault();
        SneakersServices.addSneaker(sneaker)
    }
    
    console.log(sneaker);

    return (
        <div className='addItem'>
            <button className='roundBlackBtn' id='addItemBtn' onClick={showForm}>Add</button>
            <div className='addForm'>
                <AiOutlineClose className='closeForm' onClick={hideForm}/>
                <p className='titleForm'>To add a product, the following information is requested:</p>
                {categories && categories[0].name}
                {/* al poner esto se imprime la primera categoria */}
                <form className='dataForm'>
                    <label for="brandForm">Product brand:</label>
                        <input 
                            name='brand'
                            type="text" 
                            id="brandForm" 
                            className='inputForm' 
                            placeholder='Brand'
                            value={sneaker.brand}
                            onChange={handleSneakerChange}
                        />
                    <label for="modelForm">Product model:</label>
                        <input 
                            name='model'
                            type="text" 
                            id="modelForm" 
                            className='inputForm' 
                            placeholder='Model'
                            value={sneaker.model}
                            onChange={handleSneakerChange}
                        />
                    <label for="priceForm">Product price:</label>
                        <input 
                            name='price'
                            type="text" 
                            id="priceForm" 
                            className='inputForm' 
                            placeholder='Price'
                            value={sneaker.price}
                            onChange={handleSneakerChange}
                        />
                    <label for="imgForm">Product image:</label>
                        <input 
                            name='img'
                            type="text" 
                            id="imgForm" 
                            className='inputForm' 
                            placeholder='Url'
                            value={sneaker.img}
                            onChange={handleSneakerChange}
                        />
                    <label for="descriptionForm">Product description:</label>
                        <input 
                            name='description'
                            type="text" 
                            id="descriptionForm" 
                            className='inputForm' 
                            placeholder='Description'
                            value={sneaker.description}
                            onChange={handleSneakerChange}
                        />
                    <label for="categoryForm">Product category:</label>
                        <select 
                            name='categoryId'
                            value={sneaker.categoryId}
                            id='categoryForm' 
                            className='inputForm' 
                            onChange={handleCategoryChange}
                        >
                            {categories.map(categoryName=>{
                                return (
                                    <option value={categoryName.id} key={categoryName.id}>{categoryName.name}</option>
                                    )
                                })}
                        </select>
                    {/* <label for="highlightForm">Is this product a highlight?:</label>
                        <input 
                            name='highlight'
                            type="text" 
                            id="highlightForm" 
                            className='inputForm' 
                            value={sneaker.highlights}
                            onChange={handleSneakerChange}

                            hacerlo con un checkbox
                        /> */}
  
                    <button className='roundBlackBtn' id='addFormBtn' onClick={handleSubmit} type="submit">Add product</button>
                </form>
            </div>
        </div>
    )
}

export default AddForm
