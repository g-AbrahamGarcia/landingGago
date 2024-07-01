import React from 'react'
import './Contacto.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contacto = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d757ca0f-7e19-411a-82f7-8922a91f1fc3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensaje enviado correctamente");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contacto' id='contactanos'>
        <div className="contacto-col">
            <h3>Envianos un mensaje<img src={msg_icon} alt=""/></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, doloremque dolores. Odio doloribus debitis, ad neque consequuntur asperiores nisi facilis earum consectetur eum voluptate ab minus saepe cupiditate odit laboriosam?</p>
            <ul>
                <li><img src={mail_icon} alt="" />trans.gago.esp@hotmail.com</li>
                <li><img src={phone_icon} alt="" />55 5564 5543</li>
                <li><img src={location_icon} alt="" />Direccion direccion @ direccion</li>

            </ul>
        </div>
        <div className="contacto-col">
            <form onSubmit={onSubmit} action="">
                <label htmlFor="">Tu nombre</label>
                <input type="text" name='name' placeholder='Introduce tu nombre' required />
                <label htmlFor="">Numero de telefono</label>
                <input type="tel" name='phone' placeholder='Introduce tu numero de telefono' required />
                <label htmlFor="">Escribe tus mensajes aqui</label>
                <textarea name="message" id="" cols="30" rows="6" placeholder='Introduce tu mensaje'></textarea>
                <button type='submit' className='btn dark-btn'>Enviar ahora <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contacto
