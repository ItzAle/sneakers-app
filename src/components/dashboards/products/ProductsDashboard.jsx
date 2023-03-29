import './ProductDashboard.css'
import React, { useEffect, useState } from 'react'
import SneakersServices from '../../../apiServices/SneakersServices'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import AddForm from '../../forms/addForm/AddForm';
import { useParams} from 'react-router-dom'

function Dashboard() {
  
  const [sneakers, setSneakers] = useState([])
  useEffect(()=>{
    SneakersServices.getAllSneakers()
      .then((data)=>{setSneakers(data)})
    },[]);

  const [isDeleted, setIsDeleted] = useState(false);
  const { id } = useParams();

  const handleDelete = (id) => {
    SneakersServices.deleteSneaker(id)
      .then(() => setIsDeleted(true))
      .catch((error) => {console.log(error);});
  };


  return (
    <div className='dashBoard'>
      <AddForm/>
      {sneakers.map((item)=>{
        return(
          <div className='dashBoardRow' key={item.id}>
            <p className='itemModel'>{item.model}</p>
            <p className='itemBrand'>{item.brand}</p>
            <p className='itemPrice'>{item.price}€</p>
            <p className='itemQuantity'>1</p>
            <FaPencilAlt/>
            <FaTrashAlt onClick={handleDelete}/>
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard
