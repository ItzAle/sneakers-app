import "./ProductDashboard.css";
import React, { useEffect, useState } from "react";
import SneakersServices from "../../../apiServices/SneakersServices";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import AddForm from "../../forms/addForm/AddForm";

function Dashboard() {
  const [sneakers, setSneakers] = useState([]);
  useEffect(() => {
    SneakersServices.getAllSneakers().then((data) => {
      setSneakers(data);
    });
  }, []);

  const [showOrHideForm, setShowOrHideForm] = useState(false);
  const changeFormState = () =>{
      setShowOrHideForm(!showOrHideForm)
  }

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (id) => {
    SneakersServices.deleteSneaker(id)
      .then(() => setIsDeleted(true))
      .then(document.location.reload())
      .catch((error) => {
        console.log(error);
      });
  };

  const [id, setId] = useState(null);

  const handleChange = (id) => {
    changeFormState()
    setId(id)
     };

  return (
    <div className="dashBoard">

      {showOrHideForm === false ? '' : <AddForm id={id} changeFormState={changeFormState}/>}

      <div className="addItem">
        <button className='roundBlackBtn' id='addItemBtn' onClick={changeFormState}>Add</button>
      </div>


      {sneakers.map((item) => {
        return (
          <div className="dashBoardRow" key={item.id}>
            <p className="itemModel">{item.model}</p>
            <p className="itemBrand">{item.brand}</p>
            <p className="itemPrice">{item.price}€</p>
            <p className="itemQuantity">1</p>
            <FaPencilAlt onClick={() => handleChange(item.id)} />
            <FaTrashAlt onClick={() => handleDelete(item.id)} />
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
