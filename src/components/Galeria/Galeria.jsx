import React from 'react'
import './Galeria.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Galeria = () => {
  return (
    <div className='campus' id='fotos'>
        <div className="galeria">
            <img src={gallery_1}></img>
            <img src={gallery_2}></img>
            <img src={gallery_3}></img>
            <img src={gallery_4}></img>
        </div>
        <button className='btn dark-btn'>Ver mas <img src={white_arrow}></img></button>
      
    </div>
  )
}

export default Galeria
