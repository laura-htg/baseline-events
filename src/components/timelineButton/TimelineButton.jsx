import React from 'react';
import { RiArrowUpWideLine } from "react-icons/ri";
import './timelineButton.css';

const TimelineButton = ({ scrollToNavbar }) => {
  return (
    <div className="baseline__timeline--button" onClick={scrollToNavbar}>
        <button type="button">
            <RiArrowUpWideLine className="up-arrow" size={60} />
        </button>
    <span className="button-text">Zurück nach oben</span>
  </div>
  );
};

export default TimelineButton;