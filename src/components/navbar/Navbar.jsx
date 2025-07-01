import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine, RiArrowDownSLine } from 'react-icons/ri';
import { Sidebar } from '../../components';
import './navbar.css';
import logo from '../../assets/baseline-logo.svg';

const Navbar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const openSidebar = () => setToggleSidebar(true);
  const closeSidebar = () => setToggleSidebar(false);

  return (
    <div className='baseline__navbar'>
      <div className='baseline__navbar--logo'>
        <img src={logo} alt='Logo' />
      </div>

      <div className='baseline__navbar--links'>
        <div className='baseline__navbar--links-container'>
          <p><a href='#events'>Events <RiArrowDownSLine color="white" size={27}/></a></p>
          <p><a href='#Dienstleistungen'>Dienstleistungen</a></p>
          <p><a href='#ueberUns'>Über uns <RiArrowDownSLine color="white" size={27}/></a></p>
        </div>
      </div>
      <div className='baseline__navbar--button'>
        <button type='button'><a href='#Kontakt'>Kontakt</a></button>
      </div>
      
      <div className='baseline__navbar--sidebar'>
        {!toggleSidebar && <RiMenu3Line color="white" size={27} onClick={openSidebar} />}
        {toggleSidebar && (
          <div className="baseline__navbar--sidebar-container open">
            <RiCloseLine
              color="white"
              size={27}
              onClick={closeSidebar}
              className="baseline__navbar--sidebar_close"
            />
            <div className="baseline__navbar--sidebar-container-links">
              <Sidebar onClick={closeSidebar} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;