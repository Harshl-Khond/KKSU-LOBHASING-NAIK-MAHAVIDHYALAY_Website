import React from "react";
import "./Header.css";
import universityLogo from "../assets/university-logo.png";
import collegeLogo from "../assets/College-logo.png";

export default function Header() {
  return (
    <header className="college-header">
      {/* ===== TOP UTILITY BAR ===== */}
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="top-links">
            <span className="top-item">
              <i className="bi bi-telephone-fill me-1"></i> +91 84594 30333
            </span>
          </div>
          <div className="top-meta d-none d-lg-block">
            <span className="top-item">AISHE: C-12345</span>
            <span className="top-item ms-3">COLLEGE CODE: 1394</span>
          </div>
        </div>
      </div>

      {/* ===== MAIN BRANDING SECTION ===== */}
      <div className="main-header">
        <div className="container">
          <div className="header-flex-wrapper">
            
            {/* Left Logo */}
            <div className="logo-box">
              <img src={universityLogo} alt="University Logo" className="header-img" />
            </div>

            {/* Center Text Identity */}
            <div className="text-identity text-center">
              <p className="motto-text">|| शिक्षार्थ आइए, सेवार्थ जाइए ||</p>
              <h1 className="college-name-h1">LOBHASING NAIK MAHAVIDHYALAY</h1>
              <p className="location-text">KALAMBA (BO.) TQ MANGRULPIR DIST.WASHIM</p>
              
              <div className="affiliation-strip">
                <span className="aff-text">Affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek</span>
                <span className="aff-text">Recognized by Govt. of Maharashtra</span>
              </div>
            </div>

            {/* Right Logo */}
            <div className="logo-box text-end">
              <img src={collegeLogo} alt="College Logo" className="header-img" />
            </div>

          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Border */}
      <div className="header-bottom-line"></div>
    </header>
  );
}