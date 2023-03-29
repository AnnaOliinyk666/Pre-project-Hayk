import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketCulculation from '../../components/BasketCulculation';
import BasketItem from '../../components/BasketItem'
import { basketClearAction, basketIncrementAction } from '../../store/reducer/basketReducer';
import s from './style.module.css'


export default function BasketPage() {

  const dispatch = useDispatch()
  
  const {basket,products} = useSelector((state) => state);
  const data = basket.map (item => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product};
  })

  function render() {
    if (products.length === 0) {
      return <p>LOADING ...</p>
    } else if (basket.length === 0) {
      return <p>Basket empty ...</p>
    } else {
      return <>{data.map(item => <BasketItem key={item.id} {...item} />)}</>
    }
  }
  
  return (
    <div>
      {
        render()
      }
      <div className={s.box}>
        <BasketCulculation/>
        <button onClick={() => dispatch(basketClearAction())}>Clear basket</button>
      </div>
      
    </div>
  )
}
