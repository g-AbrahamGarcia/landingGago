import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Galeria from './components/Galeria/Galeria'
import Referencias from './components/Referencias/Referencias'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const[playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Nuestros servicios' title='Lo que ofrecemos'></Title>
        <Programs></Programs>
        <About setPlayState={setPlayState}></About>
        <Title subTitle='Galeria' title='Nuestras unidades'></Title>
        <Galeria></Galeria>
        <Title subTitle='Referencias' title='Clientes'></Title>
        <Referencias></Referencias>
        <Title subTitle='Contactanos' title='Solicita una cotizacion'></Title>
        <Contacto></Contacto>
        <Footer></Footer>


        

      </div>
      
      <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App
