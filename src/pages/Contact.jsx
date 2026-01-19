import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* ===== HERO SECTION ===== */}
      <section className="contact-hero text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">Get in touch with our administrative and admission desk.</p>
          <div className="gold-underline mx-auto"></div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row g-4">
          
          {/* LEFT: INSTITUTIONAL IDENTITY & INFO */}
          <div className="col-lg-5">
            <div className="info-card p-4 shadow-sm mb-4 border-maroon-left">
              <h4 className="text-maroon fw-bold mb-3">Institutional Identity</h4>
              <h5 className="mb-1 fw-bold text-uppercase">LOBHASING NAIK MAHAVIDHYALAY</h5>
              <p className="text-teal mb-3 fw-semibold">Kalamba (Bo.), Tq. Mangrulpir, Dist. Washim</p>
              
              <ul className="list-unstyled identity-list">
                <li><strong>AISHE Code:</strong> [Enter AISHE Code]</li>
                <li><strong>UGC Status:</strong> Recognized under 2(f) & 12(B)</li>
              </ul>
            </div>

            <div className="info-card p-4 shadow-sm mb-4">
              <h4 className="text-maroon fw-bold mb-3">Office Details</h4>
              <div className="d-flex mb-3">
                <i className="bi bi-geo-alt-fill text-teal fs-4 me-3"></i>
                <p className="mb-0">Kalamba (Bo.), Tq. Mangrulpir, Dist. Washim</p>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-telephone-fill text-teal fs-4 me-3"></i>
                <p className="mb-0">Office: [Enter Office Landline]<br/>Admission: [Enter Mobile Number]</p>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-envelope-at-fill text-teal fs-4 me-3"></i>
                <div className="mb-0">
                   <a href="mailto:lncollegekalamba2022@gmail.com" className="text-decoration-none text-dark d-block">lncollegekalamba2022@gmail.com</a>
                   <a href="mailto:dagdusingnaik@gmail.com" className="text-decoration-none text-dark d-block">dagdusingnaik@gmail.com</a>
                </div>
              </div>
              <div className="d-flex">
                <i className="bi bi-clock-fill text-teal fs-4 me-3"></i>
                <p className="mb-0"><strong>Working Hours:</strong><br/>10:00 AM – 5:30 PM (Mon - Sat)</p>
              </div>
            </div>

            <div className="social-box p-3 bg-light rounded d-flex justify-content-around">
              <a href="#" className="text-maroon fs-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-maroon fs-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-maroon fs-3"><i className="bi bi-globe"></i></a>
            </div>
          </div>

          {/* RIGHT: ENQUIRY FORM */}
          <div className="col-lg-7">
            <div className="contact-form-card p-4 p-md-5 shadow-lg">
              <h3 className="text-maroon fw-bold mb-4 text-center">Enquiry / Feedback</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Full Name</label>
                    <input type="text" className="form-control custom-input" placeholder="Enter your name" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Email ID</label>
                    <input type="email" className="form-control custom-input" placeholder="name@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">Subject</label>
                    <select className="form-select custom-input">
                      <option>Admission Enquiry</option>
                      <option>Academic Document Request</option>
                      <option>General Feedback</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">Message</label>
                    <textarea className="form-control custom-input" rows="4" placeholder="How can we help you?"></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-maroon-gold w-100 py-3 fw-bold uppercase">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* GOOGLE MAP SECTION (MANDATORY) */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="map-container rounded shadow-sm overflow-hidden border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.56636735623!2d77.4878413!3d20.4419515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI2JzMxLjAiTiA3N8KwMjknMTYuMiJF!5e0!3m2!1sen!2sin!4v1705500000000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="LOBHASING NAIK MAHAVIDHYALAY KALAMBA"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}