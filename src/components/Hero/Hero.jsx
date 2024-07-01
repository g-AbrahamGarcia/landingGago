import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'//Cambiar foto

const Hero = () => {
  return (
    <div className='Hero container' id='encabezado'>
      <div className="hero-text">
        <h1>Garantizamos viajes seguros en un mundo conectado </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit molestias maxime inventore voluptatum earum reprehenderit rem nisi quaerat saepe obcaecati, distinctio recusandae repudiandae hic beatae harum eaque. Aspernatur, quia sequi.</p>
        <button className='btn'> Explorar mas <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
