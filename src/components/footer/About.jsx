import React from 'react';
import './footer.scss';

export default function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            ABOUT
          </div>
          <a href="/" className="about-content">Contact Us</a>
          <a href="/" className="about-content">About Us</a>
          <a href="/" className="about-content">Careers</a>
          <a href="/" className="about-content">Flipkart Stories</a>
          <a href="/" className="about-content">Press</a>
          <a href="/" className="about-content">Flipkart Wholesale</a>
          <a href="/" className="about-content">Corporate Information</a>
        </div>
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            HELP
          </div>
          <a href="/" className="about-content">Payments</a>
          <a href="/" className="about-content">Shipping</a>
          <a href="/" className="about-content">Cancellation & Returns</a>
          <a href="/" className="about-content">FAQ</a>
          <a href="/" className="about-content">Report Infringement</a>
        </div>
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            POLICY
          </div>
          <a href="/" className="about-content">Return Policy</a>
          <a href="/" className="about-content">Terms Of Use</a>
          <a href="/" className="about-content">Security</a>
          <a href="/" className="about-content">Privacy</a>
          <a href="/" className="about-content">Sitemap</a>
          <a href="/" className="about-content">EPR Compilance</a>
        </div>
        <div className="about">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            SOCIAL
          </div>
          <a href="/" className="about-content">Facebook</a>
          <a href="/" className="about-content">Twitter</a>
          <a href="/" className="about-content">YouTube</a>
        </div>
        <div className="mail-us-container">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            Mail Us:
          </div>
          <div className="mail-address">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia &amp; </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
          </div>
        </div>
        <div className="mail-us-container">
          <div style={{
            color: '#878787', fontSize: 12, fontWeight: 400, marginBottom: 9,
          }}
          >
            Registered Office Address:
          </div>
          <div className="mail-address">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia &amp; </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India </p>
            <p> CIN : U51109KA2012PTC066107 </p>
            <p>
              Telephone:
              <a href="tel:18002029898">1800 202 9898</a>
            </p>
          </div>
        </div>
      </div>
      <div className="miscellaneous">
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" />
      </div>
    </div>
  );
}
