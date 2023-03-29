import React from 'react'
import { useDispatch } from 'react-redux';
import { basketDecrementAction, basketIncrementAction, basketRemoveAction } from '../../store/reducer/basketReducer';


import s from './style.module.css'

export default function BasketItem({id,thumbnail,title,price,count}) {
    const dispatch = useDispatch();
 
  return (
    <div className={s.container}>
        <img src={thumbnail} alt="img" />
        <p>{title}</p>
        <p>{price} x {count} = {price*count} $</p>
        <div className={s.btns}> 
            <button onClick={()=>dispatch(basketIncrementAction(id))}>+</button>
            <button onClick={()=>dispatch(basketDecrementAction(id))}>-</button>
            <button onClick={()=>dispatch(basketRemoveAction(id))}>X</button>
        </div>
        
    </div>
  )
}
