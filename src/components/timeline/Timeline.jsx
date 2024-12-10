import React from 'react';
import { RiArrowUpWideLine } from "react-icons/ri";
import './timeline.css';
import { motion } from 'motion/react';

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5} 
  }
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }
  }
};
const Timeline = ({ data, scrollToNavbar }) => {
  return (
    <div className="baseline__timeline section__padding">
      <div className="baseline__timeline-wrapper">
        {data.map((entry, index) => {
          const isLeft = index % 2 === 0;
          const variants = isLeft ? leftVariant : rightVariant;

          return (
            <motion.div
              key={index}
              className={`baseline__timeline-entry ${
                isLeft 
                  ? "baseline__timeline-entry__text-left" 
                  : "baseline__timeline-entry__text-right"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={variants}
            >
              <div className="baseline__timeline-entry-head">
                <div className="baseline__timeline-year">
                  {entry.year}
                </div>
              </div>
              
              <div className="baseline__timeline-content">
                <div className="baseline__timeline-title">{entry.title}</div>
                <div className="baseline__timeline-underline" />
                <div className="baseline__timeline-text">{entry.text}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="baseline__timeline-cta">
        <h1>Werden Sie <a href="#kontakt">hier</a> Teil unserer Geschichte!</h1>
      </div>
      <div className="baseline__timeline-button">
        <button type="button" onClick={scrollToNavbar}>
          Zurück nach oben <br/> <RiArrowUpWideLine size={35} />
        </button>
      </div>
    </div>
  );
};

export default Timeline;