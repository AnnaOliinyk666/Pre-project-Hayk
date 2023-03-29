import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { basketAddAction } from '../../store/reducer/basketReducer'
import s from './style.module.css'

export default function ProductItem({id,title,thumbnail}) {
  const dispatch = useDispatch()
  return (
    
    <div className={s.wrapp}>
      <Link key={id} to={`/products/${id}`}>
        <img src={thumbnail} alt="img" />
      </Link>  
      <p>{title}</p>
      <button onClick={()=>dispatch(basketAddAction(id))}>Add to basket</button>
      </div>
    
  )
}
