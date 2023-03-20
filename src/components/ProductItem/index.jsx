import React from 'react'
import s from './style.module.css'

export default function ProductItem({title,image}) {
  return (
    <div className={s.wrapp}>
        <img src={image} alt="img" />
        <p>{title}</p>
        <button>Add to basket</button>
    </div>
  )
}
