import React from 'react'
import css from '../Our_Product/Our_Product.module.css';
import Product_Card from './Product_Card';
const Our_Product = () => {
  return (
    <div className={css.head}>
        <p className={css.p1}>Our Offerings</p>
        <p className={css.p2}>The best you'll ever see!</p>
        <Product_Card/>
    </div>
  )
}

export default Our_Product;