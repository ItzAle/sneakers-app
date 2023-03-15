import React from 'react'

export default function ShopPage() {
  return (
    
    <div className='shopPage'>
  
      <div className='productCard'>
        <div className='imgBox'>
          <img className='productImg'  src="https://assets.adidas.com/images/h_840,f_auto,q_auto,
          fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Zapatilla_Forum_Low_Blanco
          _FY7757_01_standard.jpg" alt="Product" />
        </div>
        <div className='productInfo'>
          <h3 className='model'>Model</h3>
          <h5 className='brand'>Brand</h5>
          <p className='price'>Price</p>
        </div>
      </div>
    </div>
  )
}
