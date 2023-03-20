import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'


export default function CategoryItem({item}) {
  
    
  return (
    <div className={s.card}>
      <Link id={item} to={`/category/${item}`}>{item}</Link>
    </div>
  )
}
