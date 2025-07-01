import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import './sidebar.css';

const Sidebar = ({ onClick }) => (
  <div className='baseline__sidebar'>
    <p>
      <a href='#events' onClick={onClick}>
        <span>Events</span> <RiArrowDownSLine size={24} />
      </a>
    </p>
    <p>
      <a href='#dienstleistungen' onClick={onClick}>
        Dienstleistungen
      </a>
    </p>
    <p>
      <a href='#ueberUns' onClick={onClick}>
        <span>Über uns</span> <RiArrowDownSLine size={24} />
      </a>
    </p>
    <p>
      <a href='#kontakt' onClick={onClick}>
        <span>Kontakt</span>
      </a>
    </p>
    <div className='baseline__sidebar--footer'>
      <a href='#impressum'>Impressum</a>
      <a href='#nutzungsbedingungen'>Nutzungsbedingungen</a>
    </div>
  </div>
);

export default Sidebar;