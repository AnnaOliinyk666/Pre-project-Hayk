import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from '../../components/BasketItem'
import { basketIncrementAction } from '../../store/reducer/basketReducer';
import s from './style.module.css'


export default function BasketPage() {
  const {basket,products} = useSelector((state) => state);
  const data = basket.map (item => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product};
  })
  const totalPrice = data.reduce((acc,{count,price}) => acc + price*count,0)
  

  return (
    <div>
      {
        basket === undefined
        ? <p>LOADING ...</p>
        : data.map(item => <BasketItem key={item.id} {...item} />)
      }
      <div className={s.box}>
        <p><b>Total: </b>{totalPrice} $</p>
        <button>Clear basket</button>
      </div>
      
    </div>
  )
}
