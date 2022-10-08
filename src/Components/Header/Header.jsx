import React from 'react'
import './Header.css'
import { FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header container">
      <p id="logo">Malek0x1<span>YT</span></p>
      <FaYoutube color='red' size={30} />

    </div>

  )
}

export default Header