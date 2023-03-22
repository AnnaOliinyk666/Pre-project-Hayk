import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function ProductItem({id,title,thumbnail}) {
  
  return (
    
    <div className={s.wrapp}>
      <Link key={id} to={`/products/${id}`}>
        <img src={thumbnail} alt="img" />
      </Link>  
      <p>{title}</p>
      <button>Add to basket</button>
      </div>
    
  )
}
