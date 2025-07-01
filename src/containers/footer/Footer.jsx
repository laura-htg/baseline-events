import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="baseline__footer">
            <div className="baseline__footer--container">
                <p className="baseline__footer--text">© {new Date().getFullYear()} Baseline Events.</p>
                <p></p>
                <nav className="baseline__footer--nav">
                    <a href="/privacy-policy">Impressum</a>
                    <a href="/terms-of-service">Nutzungsbedingungen</a>
                </nav>
            </div>
        </footer>
    </div>
  );
};

export default Footer;