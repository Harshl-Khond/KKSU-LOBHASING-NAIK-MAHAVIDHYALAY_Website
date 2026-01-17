import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="ugc-navbar navbar navbar-expand-lg" role="navigation">
      <div className="container">
        {/* Mobile Brand Label */}
        <Link className="navbar-brand d-lg-none" to="/">Menu</Link>

        {/* Custom White Toggler */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#ugcNavbar"
          aria-controls="ugcNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="ugcNavbar">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>

            <li className="nav-item dropdown">
               <Link className="nav-link" to="/about">ABOUT</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/academic">ACADEMICS</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admissions">ADMISSIONS</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/administration">ADMINISTRATION</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/student-life">STUDENT LIFE</Link>
            </li>


           

             <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact-Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}