import React from 'react'
import s from './style.module.css'

export default function ProductItem({title,thumbnail}) {
  return (
    <div className={s.wrapp}>
        <img src={thumbnail} alt="img" />
        <p>{title}</p>
        <button>Add to basket</button>
    </div>
  )
}
