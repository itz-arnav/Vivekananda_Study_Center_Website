import React from 'react'
import '../Our_Product/Our_Product.css';
import Product_Card from './Product_Card';
const Our_Product = () => {
  return (
    <div className='head'>
        <p className='p1'>Our Offerings</p>
        <p className='p2'>Our best Offering in the market.</p>
        <Product_Card/>
    </div>
  )
}

export default Our_Product;