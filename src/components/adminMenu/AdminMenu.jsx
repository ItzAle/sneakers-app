import React from 'react'
import './AdminMenu.css'
import { FaUser, FaBoxOpen, FaCartArrowDown } from "react-icons/fa";
import ProductsDashboard from '../dashboards/products/ProductsDashboard'
import ClientsDashboard from '../dashboards/clients/ClientsDashboard'
import OrdersDashboard from '../dashboards/orders/OrdersDashboard'

function AdminMenu() {
  return (
    <div className='menu'>

      <div className='menuBox'>
        <ul id='adminMenu'>

          <div className='userDetails'>
            <div className='userPic'>
              <FaUser id='userPicIcon'/>
            </div>
            <div className='userData'>
              <p id='name'>User name</p>
              <p id='surname'>User surname</p>
            </div>
          </div>

          <li className='adminMenuPC'>
            <p>Inicio</p>
          </li>
          <li>
              <FaBoxOpen className='adminMenuIcons'/>
              <p className='adminMenuP'>Productos</p>
              {/* cuando se haga click en este li que te lleve al ProductsDashboard */}
          </li>
          <li>
              <FaUser className='adminMenuIcons'/>
              <p className='adminMenuP'>Clientes</p>
              {/* cuando se haga click en este li que te lleve al ClientsDashboard */}
          </li>
          <li>
              <FaCartArrowDown className='adminMenuIcons'/>
              <p className='adminMenuP'>Pedidos</p>
              {/* cuando se haga click en este li que te lleve al OrdersDashboard */}
          </li>
        </ul>
      </div>
      <div className='menuContent'>
        {/* que salga vacio hasta que selecciones productos, clientes o pedidos en el menu */}
        <ProductsDashboard/>
        <ClientsDashboard/>
        <OrdersDashboard/>
      </div>
    </div>
  )
}

export default AdminMenu
