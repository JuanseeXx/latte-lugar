import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.Logo_Transparente} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ducimus! Qui placeat excepturi, magnam officia at sed atque ea consectetur autem dolores corrupti delectus pariatur cupiditate impedit laboriosam, facere veniam!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPAÑÍA</h2>
            <ul>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>Entregas</li>
                <li>Política de Privacidad</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTÁCTENOS</h2>
            <ul>
                <li>+57 315 987 6215</li>
                <li>contactlattelugar@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © LatteLugar.com - Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer
