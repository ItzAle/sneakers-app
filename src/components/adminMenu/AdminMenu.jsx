import React from 'react'
import './AdminMenu.css'
import { FaUser, FaBoxOpen, FaCartArrowDown } from "react-icons/fa";
import ProductsDashboard from '../dashboards/products/ProductsDashboard'

function AdminMenu() {
  return (
    <div className='menu'>
      <div className='menuBox'>
        <div className='adminMenu'>
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
      <div className='menuContent'>
        <ProductsDashboard/>
      </div>
    </div>
  )
}

export default AdminMenu
