import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-words">
        <div className="footer-column">
          <h4>About us</h4>
          <ul>
            <li></li>
            <li>Diversity & Inclusion</li>
            <li>Teamwork</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Careers at Group3</h4>
          <ul>
            <li>Backend Engineer</li>
            <li>Account Manager</li>
            <li>Pricing Analyst</li>
            <li>IT Help Desk</li>
            <li>Mobility Specialist</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Locations</h4>
          <ul>
            <li>Kirinyaga</li>
            <li>Nairobi</li>
            <li>Nakuru</li>
            <li>Nyeri</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact us</h4>
        </div>
      </div>

      <div className="footer-right">
        <button className="app-store-btn">Download on the App Store</button>
        <button className="google-play-btn">Download on Google Play</button>
      </div>
    </footer>
  );
};

export default Footer;