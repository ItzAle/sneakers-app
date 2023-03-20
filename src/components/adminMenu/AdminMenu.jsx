import React from 'react'
import './AdminMenu.css'
import { FaUser, FaBoxOpen, FaCartArrowDown } from "react-icons/fa";
import ProductsDashboard from '../dashboards/products/ProductsDashboard'

function AdminMenu() {
  return (
    <div className='menu'>

      <div className='menuBox'>
        <div className='userDetails'>
          <div className='userPic'>
            <FaUser id='userPicIcon'/>
          </div>
          <div className='userData'>
            <p id='name'>User name</p>
            <p id='surname'>User surname</p>
          </div>
        </div>
        <div id='adminMenu'>
          <div className='dashboardSelector'>
            <li className='adminMenuLi'>
                <p className='adminMenuP'><FaBoxOpen className='adminMenuIcons'/>Productos</p>
            </li>
            <li className='adminMenuLi'>
                <p className='adminMenuP'><FaUser className='adminMenuIcons'/>Clientes</p>
            </li>
            <li className='adminMenuLi'>
                <p className='adminMenuP'><FaCartArrowDown className='adminMenuIcons'/>Pedidos</p>
            </li>
          </div>
        </div>
      </div>
      <div className='menuContent'>
        <ProductsDashboard/>
      </div>
    </div>
  )
}

export default AdminMenu
