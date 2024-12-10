import React from 'react';
import './header.css';
import { HeaderButton } from '../../components';

const Header = ({ scrollToTimeline }) => (
  <div className="baseline__header section__padding">
    <div className="baseline__header-main">
      <div className="baseline__header-content">
        <h1 className="baseline__header-headline">
          <span>Exklusive Momente.</span>
        </h1>
        <div />
        <p>Zeitlose Erinnerungen.</p>
      <br/>

      </div>

    </div>
    <HeaderButton scrollToTimeline={scrollToTimeline}/>
  </div>
);

export default Header;