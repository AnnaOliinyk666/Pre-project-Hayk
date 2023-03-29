import React from 'react'
import { NavLink } from "react-router-dom";
import s from './style.module.css'

export default function CastNavLink({label,count,...item}) {
    const checkClass = ({isActive}) => [isActive? s.active:'', s.link].join(' ');
  return (
    <NavLink data-count={count || undefined} className={checkClass} {...item}>{label}</NavLink>
  )
}
