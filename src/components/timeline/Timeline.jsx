import React, { useState } from 'react';
import { TimelineButton } from '../../components';
import './timeline.css';
import { motion } from 'motion/react';
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 } 
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

const Timeline = ({ timelineData, scrollToNavbar }) => {
  const [activeIndexes, setActiveIndexes] = useState({});

  const nextImage = (index, images) => {
    setActiveIndexes((prev) => {
      const currentIndex = prev[index] || 0;
      return {
        ...prev,
        [index]: (currentIndex + 1) % images.length,
      };
    });
  };

  const prevImage = (index, images) => {
    setActiveIndexes((prev) => {
      const currentIndex = prev[index] || 0;
      return {
        ...prev,
        [index]: (currentIndex - 1 + images.length) % images.length,
      };
    });
  };

  return (
    <div className="baseline__timeline section__padding">
      <div className="baseline__timeline-wrapper">
        {timelineData.map((entry, index) => {
          const isLeft = index % 2 === 0;
          const variants = isLeft ? leftVariant : rightVariant;
          const activeIndex = activeIndexes[index] || 0;

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
                <div className="baseline__timeline-year">{entry.year}</div>
            
              <div className="baseline__timeline-content">
                <div className="baseline__timeline-title">{entry.title}</div>
                <div className="baseline__timeline-underline" />
                <div 
                  className="baseline__timeline-text" 
                  dangerouslySetInnerHTML={{ __html: entry.text }}
                >
              </div>

                {entry.images && entry.images.length > 0 && (
                  <div className="baseline__timeline-gallery">
                    {entry.images.length > 1 && (
                      <button 
                        className="baseline__timeline-gallery-arrow baseline__timeline-gallery-arrow-left" 
                        onClick={() => prevImage(index, entry.images)}
                      >
                        <RiArrowLeftSLine size={24} />
                      </button>
                    )}

                    <img 
                      src={entry.images[activeIndex]} 
                      alt={`Bild ${activeIndex + 1}`} 
                      className="baseline__timeline-gallery-image" 
                    />

                    {entry.images.length > 1 && (
                      <button 
                        className="baseline__timeline-gallery-arrow baseline__timeline-gallery-arrow-right" 
                        onClick={() => nextImage(index, entry.images)}
                      >
                        <RiArrowRightSLine size={24} />
                      </button>
                    )}
                  </div>
                )}

                  {entry.video && entry.video.length > 0 && (
                    <div className="baseline__timeline-video">
                        <video width="100%" controls disablePictureInPicture controlsList="nodownload nofullscreen">
                          <source src={entry.video[0]} type="video/mp4" />
                            Ihr Browser unterstützt dieses Video nicht.
                        </video>
                    </div>
                  )}

              </div>
            </motion.div>
          );
        })}
      </div>

      <TimelineButton scrollToNavbar={scrollToNavbar} />
    </div>
  );
};

export default Timeline;