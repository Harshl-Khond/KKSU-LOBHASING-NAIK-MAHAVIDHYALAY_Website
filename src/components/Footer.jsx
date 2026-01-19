import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ugc-footer">
      <div className="container">
        <div className="row gy-4 footer-content">

          {/* College Identity & Mission */}
          <div className="col-12 col-md-4">
            <h5 className="footer-title">MPSC College, KALAMBA</h5>
            <div className="title-underline"></div>
            <p className="footer-description">
              Empowering students through quality education and administrative excellence. 
              Affiliated to KKSU University | NAAC Re-accredited with A+ Grade.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" aria-label="Youtube"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="col-6 col-md-2">
            <h6 className="footer-subtitle">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/about/overview">About HEI</a></li>
              <li><a href="/academics/programs">Academics</a></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/research">Research</a></li>
              <li><a href="/iqac">IQAC Portal</a></li>
            </ul>
          </div>

          {/* Mandatory Disclosures */}
          <div className="col-6 col-md-3">
            <h6 className="footer-subtitle">Legal & Disclosure</h6>
            <ul className="footer-links">
              <li><a href="/info/rti">RTI Act</a></li>
              <li><a href="/administration/icc">Internal Complaint Committee</a></li>
              <li><a href="/student-life/anti-ragging">Anti-Ragging Policy</a></li>
              <li><a href="/students/grievance">Grievance Redressal</a></li>
              <li><a href="/about/nirf">NIRF Data</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3">
            <h6 className="footer-subtitle">Contact Details</h6>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt-fill"></i>
                <span>AT.KALAMBA(BO.) TQ MANGRULPIR DIST.WASHIM</span>
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                <a href="mailto:info@mpsccollege.edu.in">info@mpsccollege.edu.in</a>
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} <strong>LOBHASING NAIK MAHAVIDHYALAY KALAMBA</strong>.
          </p>
          <div className="ugc-compliance-tag">
            <span>Website Compliant with UGC Public Self-Disclosure Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}