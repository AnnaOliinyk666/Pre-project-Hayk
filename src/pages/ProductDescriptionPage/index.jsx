import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { basketAddAction } from '../../store/reducer/basketReducer'


import s from './style.module.css'

export default function ProductDescriptionPage() {
  const dispatch = useDispatch()
    
  const {id} = useParams()
//   const product = useSelector(state => state.products.filter((product) => product.id == id))
  const product = useSelector(({products}) => products.find(product => product.id === +id))
  
  return (
    <div>
        <div className={s.wrapper}>
        {
            product === undefined 
            ? <p>LOADING ...</p> 
            :
            <>
            <img src={product.thumbnail} alt={product.title} />
            <div>
                <h2 className={s.title}>{product.title}</h2>
                <p className={s.descr}>{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia quae dolores labore magnam odio ullam. Consequuntur eum deserunt, molestias cum officiis earum. Culpa ut ex itaque in cumque officiis?</p>
                <div className={s.box}>
                    <p><b>Price: </b>{product.price}</p>
                    <button onClick={dispatch(basketAddAction(product.id))}>Add to basket</button>
                </div>
                
            </div>
            </>  
        }
    </div>
    </div>
  )
}
