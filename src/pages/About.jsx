import React from "react";
import "./About.css";
import collegeImage from "../assets/College.png";

export default function About() {
  return (
    <div className="about-page">
      {/* ===== PAGE HEADER ===== */}
      <header className="about-header text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About the Institution</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active text-white">Our Journey</li>
            </ol>
          </nav>
        </div>
      </header>

      <div className="container my-5">
        <div className="row g-5">
          
          {/* ===== DETAILED COLLEGE INFORMATION & IMAGE ===== */}
          <section className="col-lg-7">
            <div className="content-card border-0 shadow-sm">
              <h2 className="section-heading"><i className="bi bi-info-circle-fill"></i> Our Legacy & Excellence</h2>
              <div className="college-detail-text">
                <p className="lead">
                  Subhashrao Naik Mahavidhyalay, Lohgaon, established with a profound vision to serve the rural community, 
                  has emerged as a premier center for higher education in the region.
                </p>
                <p>
                  Affiliated with the prestigious <strong>Kavikulaguru Kalidas Sanskrit University (KKSU)</strong>, our institution 
                  specializes in bridging the gap between traditional values and modern scientific temper. We offer a 
                  comprehensive range of programs in Science and Arts, designed to nurture critical thinking and 
                  administrative skills among students.
                </p>
                <p>
                  Over the years, the college has developed state-of-the-art laboratories, a digital library, and a 
                  vibrant campus culture that encourages students to excel beyond the classroom. Our alumni have 
                  gone on to serve in various administrative, educational, and scientific sectors across the country.
                </p>
              </div>
              <div className="college-live-image mt-4">
                 {/* This image is pulled from Unsplash (Google-like high quality stock) */}
                <img 
                  src={collegeImage}
                  alt="College Campus Building" 
                  className="img-fluid rounded shadow" 
                />
                <p className="image-caption mt-2 text-muted"><em>Institutional Campus - A Hub for Holistic Development</em></p>
              </div>
            </div>
          </section>

          {/* ===== VISION & MISSION (Right Sidebar Style) ===== */}
          <section className="col-lg-5">
            <div className="sticky-top" style={{ top: '20px' }}>
              
              {/* Vision Card */}
              <div className="vision-card mb-4">
                <div className="card-header-custom vision">
                   <h3><i className="bi bi-eye"></i> Our Vision</h3>
                </div>
                <div className="card-body-custom">
                  <p>"To be a global center of excellence in education that empowers rural youth with administrative expertise, ethical leadership, and social responsibility."</p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="mission-card">
                <div className="card-header-custom mission">
                   <h3><i className="bi bi-target"></i> Our Mission</h3>
                </div>
                <div className="card-body-custom">
                  <ul>
                    <li><i className="bi bi-check2-circle"></i> To provide accessible and quality higher education to students from diverse backgrounds.</li>
                    <li><i className="bi bi-check2-circle"></i> To foster a research-oriented environment in Science and Humanities.</li>
                    <li><i className="bi bi-check2-circle"></i> To integrate traditional Sanskrit wisdom with modern administrative training.</li>
                    <li><i className="bi bi-check2-circle"></i> To develop morally strong and socially committed leaders.</li>
                  </ul>
                </div>
              </div>

              {/* Institutional Stats Summary */}
              <div className="content-card mt-4 grey-card text-center">
                 <h5 className="text-maroon fw-bold">Institutional Status</h5>
                 <hr />
                 <div className="d-flex justify-content-between px-3">
                    <strong>AISHE Code:</strong>
                    <span>C-XXXXX</span>
                 </div>
                 <div className="d-flex justify-content-between px-3 mt-2">
                    <strong>NAAC:</strong>
                    <span className="badge bg-success">A+ Grade</span>
                 </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}