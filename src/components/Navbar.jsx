import React, {useEffect, useState} from 'react';
import { Link} from "react-router-dom";
import { styles } from "../style";
import { navLinks } from '../constants';
import {logo ,menu, close } from "../assets";

const Navbar = () => {
  const [first,setfirst] =useState("");
  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link
           to="/"
           className='flex items-center gap-2' onClick={() =>{
            setActive("");
            window.scrollTo(0,0)
           }}>
            <img src={logo} alt="logo" className='w-[12px] h-[23px]  '/>
          </Link>
        </div>

      </nav>
  )
}

export default Navbar