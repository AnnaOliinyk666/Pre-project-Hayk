import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ProductItem from '../../components/ProductItem'
import s from './style.module.css'

export default function ShowSelectCategory () {
    const {category} = useParams()
    const products = useSelector(state => state.products.filter((product) => product.category === category))
return (
    <div>
         <div className={s.wrapp}>
        {
          products.map((item) => <ProductItem key={item.id} {...item}/>)
        }
      </div>
    </div>
)
}