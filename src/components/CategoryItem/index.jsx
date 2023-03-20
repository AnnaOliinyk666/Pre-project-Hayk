import React from 'react'
import s from './style.module.css'


export default function CategoryItem({item}) {
    
  return (
    <div className={s.card}>
        {item}
    </div>
  )
}
