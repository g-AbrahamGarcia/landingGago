import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about' id='sobre'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'></img>
        <img src={play_icon} alt='' className='play-icon' onClick={() => {
          setPlayState(true)}}></img>

      </div>
      <div className="about-right">
        <h3>SOBRE NUESTRA EMPRESA</h3>
        <h2>Slogan Subtitulo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aut quod harum quasi amet fugiat distinctio ut! Laboriosam provident porro blanditiis? Nisi ipsa nobis ea hic excepturi quo architecto illum.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quaerat possimus ducimus sapiente labore officiis tenetur distinctio nemo esse? Illo laboriosam quisquam beatae fugit reprehenderit. Esse corporis fugiat laboriosam veritatis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium ea inventore iusto, at obcaecati ratione nihil necessitatibus adipisci quo odit dignissimos nesciunt numquam assumenda! Magni quo debitis soluta laborum.</p>
      </div>
      
    </div>
  )
}

export default About
