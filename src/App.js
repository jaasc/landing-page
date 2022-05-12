import React, { useState } from 'react'
import Articles from './Articles'
import Features from './Features'
import Hero from './Hero'
import logo from './images/logo.svg'
import logoF from './images/logo-white.svg'
import facebook from './images/icon-facebook.svg'
import youtube from './images/icon-youtube.svg'
import twitter from './images/icon-twitter.svg'
import pinterest from './images/icon-pinterest.svg'
import instagram from './images/icon-instagram.svg'

function App() {
  const [menu, setMenu] = useState(false)

  function toggleMenu(){
    setMenu(!menu)
  }

  return (
    <div className="appContainer">
      <header>
        <img src={logo} alt="easybank logo"/>
        <div className={`toggle-nav${menu ? "-active" : ""}`} onClick={toggleMenu}></div>
        <ul className={`navbar toggle-menu${menu ? "-active" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
        <button className='inviteBtn'>Request Invite</button>
      </header>
      <Hero/>
      <Features/>
      <Articles/>
      <footer>
        <img src={logoF} alt="easybank logo"/>
        <div className='social'>
          <img src={facebook} alt="facebook"/>
          <img src={youtube} alt="youtube"/>
          <img src={twitter} alt="twitter"/>
          <img src={pinterest} alt="pinterest"/>
          <img src={instagram} alt="instagram"/>
        </div>
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Support</li>
          <li>Privacy Policy</li>
        </ul>
        <button className='inviteBtn'>Request Invite</button>
        <h4>© Easybank. All Rights Reserved</h4>
      </footer>
    </div>
  )
}

export default App;
