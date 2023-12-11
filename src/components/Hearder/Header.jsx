import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import { FaEnvelope, FaGithub, FaLinkedin, } from 'react-icons/fa';


const Header = () => {

  const handleClick = () => {
    <Contact />
   }
  
  return (
    <div className='header flex flex-col' id='header'>
        <Navbar />
      <div className='container flex'>
        <div className='header-content'>
            <h1 className='text-uppercase text-white op-07 fw-6 ls-2'>Sachiyo SABLÉ</h1>
            <h3 className='header-title text-white fw-6 '>BONJOUR, JE SUIS</h3>
            <h3 className='header-title text-white fw-6 '> <span className='text-orange'> Développeur Web Full Stack</span></h3>
            <div className='btn-groups flex'>
            <button type = "button" className='btn-item bg-brown fw-4 ls-2'>Voir mes projets</button>
            <Link to="/contact" onClick={handleClick}>
            <button type = "button" className='btn-item bg-dark fw-4 ls-2'>Contacter à moi</button>
            </Link>
            </div>

            <div className='icon-content'>
                <ul className='icon-social-links flex flex-c'>
                    <li>
                        <a href = "https://www.linkedin.com/in/sachiyo-s-0407s/" className='text-white'>
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href = "https://github.com/Sa-lile" className='text-white'>
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a href = "sachiyo.sable@gmail.com" className='text-white'>
                            <FaEnvelope />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
