/**
 * Footer component of the application
 * @author:Shravya P
 */
import React from 'react';
import './footer.scss';
import About from './About';

export default function Footer() {
  return (
    <div className="footer-container">
      <About />
    </div>
  );
}
