import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/LOGO2.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll'

const Navbar = () => {
  
  const[stycky, setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  
  return (
    <nav className={`container ${stycky? 'dark-nav' : ''}`}>
        <img className='logo' src={logo} alt=""></img>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='encabezado' smooth={true} offset={0} duration={500}>Bienvenido</Link></li>
            <li><Link to='servicios' smooth={true} offset={-230} duration={500}>Servicios</Link></li>
            <li><Link to='sobre' smooth={true} offset={-90} duration={500}>Sobre nosotros</Link></li>
            <li><Link to='fotos' smooth={true} offset={-220} duration={500}>Galeria</Link></li>
            <li><Link to='ref' smooth={true} offset={-230} duration={500}>Referencias</Link></li>
            <li> <Link to='contactanos' smooth={true} offset={-220} duration={500} className='btn'>Contactanos</Link></li>
        </ul>
        <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar
