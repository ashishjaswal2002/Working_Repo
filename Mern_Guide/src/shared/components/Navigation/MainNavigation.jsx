import React from 'react'
import { MainHeader } from './MainHeader';
import { Link } from 'react-router-dom';
import './MainNavigation.css'
import { NavLinks } from './NavLinks';
import { SideDrawer } from './SideDrawer';
import { useState } from 'react';
import Backdrop from '../UIElement/Backdrop';
export const MainNavigation = (props) => {
  const [isOpen,setopen] =useState(false);


 const openDrawer = ()=>{
  setopen(true);
 }
const closeDrawer =()=>{
  setopen(false);
}

  return (
    <> 
    {isOpen && <Backdrop onClick={closeDrawer}/>}
    {isOpen &&
    
     <SideDrawer show={isOpen} onClick={closeDrawer}>
      <nav className='main-navigation__drawer-nav'>
   <NavLinks/>
      </nav>
     </SideDrawer>
     
     } 
       <MainHeader >
       <button className='main-navigation__menu-btn' onClick={openDrawer}>
        <span></span>
        <span></span>
        <span></span>
       </button>
   
       <h1 className='main-navigation__title'><Link to='/'>Your Places</Link></h1>

       <nav className='main-navigation__header-nav '>
   <NavLinks/>
       </nav>
      </MainHeader>
      </>
  )
}
