import React from 'react'
import { NavLink } from "react-router-dom";
import s from './style.module.css'

export default function Nav() {
    const checkClass = ({isActive}) => isActive? s.active:'';
    const links = [
        {id: 1, label: 'categories',to:'/'},
        {id: 2, label: 'all products',to:'/products/all'},
        {id: 3, label: 'basket',to:'/basket'}
    ]
  return (
    <div>
        <nav className={s.nav}>
            {
                links.map(({id,label,to}) => <NavLink className={checkClass} key={id} to={to}>{label}</NavLink>)
            }
            
        </nav>
    </div>
  )
}
