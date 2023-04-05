import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { basketAddAction } from '../../store/reducer/basketReducer'
import s from './style.module.css'

export default function ProductItem({id,title,thumbnail,price,discountPercentage}) {
  const dispatch = useDispatch()
  const newPrice = +(price - price/100*discountPercentage).toFixed(2);
  return (
    
    <div className={s.wrapp}>
      <Link key={id} to={`/products/${id}`}>
        <img src={thumbnail} alt="img" />
      </Link>  
      <p> <b>{title}</b></p>
      <p>price: <span className={s.oldPrice}>{price}</span>  <span className={s.newPrice}>{newPrice} $</span></p>
      <button onClick={()=>dispatch(basketAddAction(id))}>Add to basket</button>
      </div>
    
  )
}
