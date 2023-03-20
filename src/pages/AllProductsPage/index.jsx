import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'

export default function AllProductsPage() {
  const products = useSelector(state => state.products)
  return (
    <div >
      <h1>All Products</h1>
      <div className={s.wrapp}>
        {
          products.map((item) => <ProductItem key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}


