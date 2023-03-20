import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'
import { useParams } from "react-router-dom"

export default function ProductsPage() {
  const products = useSelector(state => state.products)
  const {category} = useParams()
  const productsCategory = useSelector(state => state.products.filter((product) => product.category === category))
  return (
    <div >
        <h1>{category? category : 'All Products'}</h1>
      
      <div className={s.wrapp}>
        
        
        {
            category?
        
            productsCategory.map((item) => <ProductItem key={item.id} {...item}/>)
            :
            
            products.map((item) => <ProductItem key={item.id} {...item}/>)

        }
        
      </div>
    </div>
  )
}

// import { useSelector } from "react-redux"
// import { useParams } from "react-router-dom"
// import ProductItem from '../../components/ProductItem'
// import s from './style.module.css'

// export default function ShowSelectCategory () {
//     const {category} = useParams()
//     const products = useSelector(state => state.products.filter((product) => product.category === category))
// return (
//     <div>
//          <div className={s.wrapp}>
//         {
//           products.map((item) => <ProductItem key={item.id} {...item}/>)
//         }
//       </div>
//     </div>
// )
// }