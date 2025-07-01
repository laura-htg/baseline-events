import React from 'react';
import { RiArrowDownWideLine } from "react-icons/ri";
import './headerButton.css';

const HeaderButton = ({ scrollToTimeline }) => {
  return (
    <div className="baseline__header--button" onClick={scrollToTimeline}>
      <span className="baseline__header--button-text">Unsere Geschichte</span>
      <button type="button">
        <RiArrowDownWideLine className="down-arrow" size={60} />
      </button>
    </div>
  );
};

export default HeaderButton;