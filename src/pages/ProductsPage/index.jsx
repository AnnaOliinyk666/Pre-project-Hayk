import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'
import { useParams } from "react-router-dom"
import ProductsFilterBar from '../../components/ProductsFilterBar'
import { productsResetAction } from '../../store/reducer/productsReducer'


export default function ProductsPage() {
  const {category} = useParams()

  const products = useSelector(
    ({products}) => {
      if (category === undefined){
          return products
      }
      return products.filter(item => item.category === category);
    }
  );
  
  const dispatch = useDispatch()
  useEffect(()=>{dispatch(productsResetAction())},[])
  const productsCategory = useSelector(state => state.products.filter((product) => product.category === category))


  const searchProducts = products.filter(prod => prod.show === true)
  
  return (
    <div >
        <h1>{category? category : 'All Products'}</h1>
        <ProductsFilterBar/>
      <div className={s.wrapp}>
        
        
        {
            products
            .filter(({show}) => show)
            .map(item => <ProductItem key={item.id} {...item}/>)

        }
        
      </div>
    </div>
  )
}



              
          
