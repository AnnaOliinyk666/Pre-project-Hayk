import React from 'react'
import { useDispatch } from 'react-redux';
import { productsSearchAction } from '../../store/reducer/productsReducer';
import s from './style.module.css'

export default function ProductsFilterBar() {
    
    const dispatch = useDispatch();
    const onChange =(e) => {
        
        dispatch(productsSearchAction(e.target.value))
        
    }
    const sortOnChange = (e) => {
        console.log(e.target.value);
    }
  return (
    <div className={s.input}>
        <input onChange={onChange}   type="text" placeholder='search...'/>
        <select onChange={sortOnChange} name="price" >
            <option value="1">high</option>
            <option value="2">low</option>
        </select>
        
        
    </div>
    
  )
}
