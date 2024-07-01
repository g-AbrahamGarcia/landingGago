import React, { useRef } from 'react'
import './Referencias.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



function Referencias() {
const slider = useRef();
let tx = 0;

//Si quieres agregar mas tarjetas de clientes, el valor de la variable tx es 100
//entre el numero de elementos totales

  const deslizarAdelante = ()=>{
    if(tx > -50){
      tx -=25
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  }
  const deslizarAtras = ()=>{
    if(tx < 0){
      tx +=25
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  }


  return (
    <div className='referencias' id='ref'>
        <img src={next_icon} alt='' className='next-btn' onClick={deslizarAdelante}></img>
        <img src={back_icon} alt='' className='back-btn' onClick={deslizarAtras}></img>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Grupo Pochteca 1</h3>
                    <span>Ciudad, Estado</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia dignissimos, suscipit dicta officiis aspernatur nisi totam perferendis odio fuga quia? Quod optio dignissimos laboriosam, amet sunt sed fugiat odit.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Grupo Pochteca 2</h3>
                    <span>Ciudad, Estado</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia dignissimos, suscipit dicta officiis aspernatur nisi totam perferendis odio fuga quia? Quod optio dignissimos laboriosam, amet sunt sed fugiat odit.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Grupo Pochteca 3</h3>
                    <span>Ciudad, Estado</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia dignissimos, suscipit dicta officiis aspernatur nisi totam perferendis odio fuga quia? Quod optio dignissimos laboriosam, amet sunt sed fugiat odit.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Grupo Pochteca 4</h3>
                    <span>Ciudad, Estado</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia dignissimos, suscipit dicta officiis aspernatur nisi totam perferendis odio fuga quia? Quod optio dignissimos laboriosam, amet sunt sed fugiat odit.
                </p>
              </div>
            </li>
          </ul>
        </div>

    </div>
  )
}


export default Referencias
