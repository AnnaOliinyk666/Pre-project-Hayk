import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'
import s from './style.module.css'



export default function CategoriesPage() {
    const category = useSelector(state => state.categories)
  return (
    <>
    <h2 className={s.title}>Best shop for the best</h2>
    <div className={s.wrapper}>
        
        {
            category.map((item) => <CategoryItem key={item} item={item}/>)
        }
    </div>
    </>
    
  )
}


