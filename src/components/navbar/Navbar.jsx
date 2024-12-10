import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/baseline-logo.svg';

const Menu = () => (
  <>
  <p><a href='#events'>Events <RiArrowDownSLine size={24} style={{ verticalAlign: "middle" }} /></a></p>
  <p><a href='#dienstleistungen'>Dienstleistungen</a></p>
  <p><a href='#ueberUns'>Über uns <RiArrowDownSLine size={24} style={{ verticalAlign: "middle" }} /></a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='baseline__navbar'>
      <div className='baseline__navbar-logo'>
          <img src={logo} alt='logo'/>
      </div>
      <div className='baseline__navbar-links'>  
         <div className='baseline__navbar-links_container'>
            <Menu />
         </div>
      </div>
      <div className='baseline__navbar-button'>
        <button type='button'>Kontakt</button>
      </div>
      <div className='baseline__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="baseline__navbar-menu_container scale-up-center">
              <div className="baseline__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
      </div>
    </div>
  )
};

export default Navbar;