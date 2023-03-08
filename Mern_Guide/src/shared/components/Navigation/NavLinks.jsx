import React from 'react'
import './NavLinks.css'
import {NavLink} from 'react-router-dom'
export const NavLinks = (props) => {
  return (
   <ul className=''>
    <li>
        <NavLink to="/" exact className="one" >All Users</NavLink>
    </li>
    <li>
        <NavLink to="/u1/places">My Places</NavLink>
    </li>
    <li>
        <NavLink to="/places/new">ADD Place</NavLink>
    </li>
    <li>
        <NavLink to="/auth">Authenticate</NavLink>
    </li>
   </ul>
  )
}
