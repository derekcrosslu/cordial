import './index.css';
import React from 'react'
import { snapshot } from 'valtio'
import state from '../../store'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const snap = snapshot(state)
  const handleClick = (str) => {
    console.log("str: ", str);
    state.area = str
  }
  const handleReserva = (str) => {
    console.log("str: ", str);
    if(str === 'reservas'){
      state.calendar = true
    } else if (str === 'contacto'){
      console.log("contacto: ", snap.contacto);
      state.calendar = false
      state.contacto = true
    }
  }


  return (
    <div className="navbar">

      <div className={`nav_items ${menuOpen && "open"} gap-0.5` }>
        <a href='#' className='py-4 px-8 ' onClick={()=>handleClick('bar')}>BAR</a>
        <a href='#' className='py-4 px-8 ' onClick={()=>handleClick('terraza')}>TERRAZA</a>
        <a href='#' className='py-4 px-8 ' onClick={()=>handleClick('sala')}>SALA</a>     
        <a href='#' className='py-4 px-8 ' onClick={()=>handleReserva('reservas')}>RESERVAS</a>     
        <a href='https://cordial-sable.vercel.app/reservas' className='py-4 px-8 ' >ADMIN</a>
        
      </div>
      <div className={`nav_toggle ${menuOpen && "open"}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span  ></span>
        <span ></span>
        <span ></span>
      </div>
    </div>
  )
};
export default Navbar;