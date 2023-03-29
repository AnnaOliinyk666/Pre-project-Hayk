import React from 'react'
import { useSelector } from 'react-redux';

import CastNavLink from '../CastNavLink';
import s from './style.module.css'

export default function Nav() {
    // const checkClass = ({isActive}) => isActive? s.active:'';
    const {basket} = useSelector((state) => state);
    const totalCount = basket.reduce((acc,{count}) => acc + count,0)
    const links = [
        {id: 1, label: 'categories',to:'/'},
        {id: 2, label: 'all products',to:'/products/all'},
        {id: 3, label: 'basket',to:'/basket', count: totalCount},
        {id: 4, label: 'blog',to:'/blog'}
    ]
    
  return (
    <div>
        <nav className={s.nav}>
            {
                links.map(({id,...item}) => <CastNavLink key={id} {...item}/>)
            }
            
        </nav>
    </div>
  )
}
