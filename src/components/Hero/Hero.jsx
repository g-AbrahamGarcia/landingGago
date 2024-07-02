import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'//Cambiar foto

const Hero = () => {
  return (
    <div className='Hero container' id='encabezado'>
      <div className="hero-text">
        <h1>Garantizamos viajes seguros en un mundo conectado </h1>
        <p>Ofrecemos transporte de químicos confiable y seguro, con estándares rigurosos de seguridad, puntualidad y integridad del producto. Nuestro equipo capacitado y tecnología avanzada garantizan eficiencia y tranquilidad para nuestros clientes.</p>
        <button className='btn'> Explorar mas <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
