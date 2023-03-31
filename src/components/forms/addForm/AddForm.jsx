import React, { useEffect, useState } from 'react'
import SneakersServices from '../../../apiServices/SneakersServices'
import { AiOutlineClose } from "react-icons/ai";
import "./AddForm.css";


function AddForm({changeFormState}) {

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
    const [sneaker, setSneaker] = useState(sneakerModel);

    useEffect(()=>{
        SneakersServices.getAllSneakersCategories()
          .then((data)=>{setCategories(data)})
        },[]);

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
        document.location.reload();
    }
    console.log(sneaker);

    return (
        <div className='addItem'>
            <div className='addForm'>
                <AiOutlineClose className='closeForm' onClick={changeFormState}/>

                <p className='titleForm'>To add or edit a product, the following information is requested:</p>
                <form className='dataForm'>
                    <label htmlFor="brandForm" className = "FormSpace">Product brand:</label>
                        <input 
                            name='brand'
                            type="text" 
                            id="brandForm" 
                            className='inputForm' 
                            placeholder='Brand'
                            value={sneaker.brand}
                            onChange={handleSneakerChange}
                        />
                    <label htmlFor="modelForm" className = "FormSpace">Product model:</label>
                        <input 
                            name='model'
                            type="text" 
                            id="modelForm" 
                            className='inputForm' 
                            placeholder='Model'
                            value={sneaker.model}
                            onChange={handleSneakerChange}
                        />
                    <label htmlFor="priceForm" className = "FormSpace">Product price:</label>
                        <input 
                            name='price'
                            type="text" 
                            id="priceForm" 
                            className='inputForm' 
                            placeholder='Price'
                            value={sneaker.price}
                            onChange={handleSneakerChange}
                        />
                    <label htmlFor="imgForm" className = "FormSpace">Product image:</label>
                        <input 
                            name='img'
                            type="text" 
                            id="imgForm" 
                            className='inputForm' 
                            placeholder='Url'
                            value={sneaker.img}
                            onChange={handleSneakerChange}
                        />
                    <label htmlFor="descriptionForm" className = "FormSpace">Product description:</label>
                        <input 
                            name='description'
                            type="text" 
                            id="descriptionForm" 
                            className='inputForm' 
                            placeholder='Description'
                            value={sneaker.description}
                            onChange={handleSneakerChange}
                        />
                    <label htmlFor="categoryForm" className = "FormSpace">Product category:</label>
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
                    <label htmlFor="highlightForm" className = "FormSpace">Is this product a highlight?:</label>
                        <select 
                            name='highlights'
                            id="highlightForm" 
                            className='inputForm' 
                            value={sneaker.highlights}
                            onChange={handleSneakerChange}
                        >
                            <option value={false}>No</option>
                            <option value={true}>Yes</option>
                        </select>
                    <button
                        className='roundBlackBtn'
                        id='addFormBtn'
                        onClick={handleSubmit}
                        type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddForm
