import React from "react";
import "./Admissions.css";

export default function Admissions() {
  const steps = [
    { title: "Notification", desc: "Official announcement on website & news." },
    { title: "Application", desc: "Fill the online/offline form with details." },
    { title: "Merit List", desc: "Publication of selected candidates list." },
    { title: "Verification", desc: "Original document checking at college." },
    { title: "Fee Payment", desc: "Secure your seat via digital payment." }
  ];

  return (
    <div className="admission-page">
      {/* ===== HERO SECTION ===== */}
      <section className="admission-hero text-center text-white">
        <div className="container">
          <span className="badge bg-gold text-dark px-3 py-2 mb-3">OPEN FOR 2026-27</span>
          <h1 className="display-4 fw-bold">Admission Portal</h1>
          <p className="lead">Your journey towards a professional career starts here.</p>
        </div>
      </section>

      <div className="container my-5">
        <div className="row g-4">
          
          {/* LEFT COLUMN: GUIDELINES & PROCESS */}
          <div className="col-lg-8">
            
            {/* 1. Overview & Mode */}
            <div className="admission-card p-4 mb-4 border-start-maroon">
              <h2 className="section-title"><i className="bi bi-info-circle-fill"></i> Admission Overview</h2>
              <p className="mt-3">Admissions at our institution are strictly based on <strong>Merit</strong>, following the norms of the University and Government of Maharashtra.</p>
              <div className="row text-center g-3 mt-2">
                <div className="col-6 col-md-3">
                  <div className="info-box"><strong>Mode</strong><br/>Merit Based</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="info-box"><strong>Year</strong><br/>2026-27</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="info-box"><strong>Intake</strong><br/>Limited</div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="info-box"><strong>Status</strong><br/><span className="text-success">Active</span></div>
                </div>
              </div>
            </div>

            {/* 2. Step-by-Step Procedure */}
            <div className="admission-card p-4 mb-4">
              <h2 className="section-title">Admission Process</h2>
              <div className="process-wrapper mt-4">
                {steps.map((step, index) => (
                  <div className="process-step" key={index}>
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <h5 className="mb-0 fw-bold">{step.title}</h5>
                      <p className="small text-muted mb-0">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Fee Structure & Refund (UGC MANDATORY) */}
            <div className="admission-card p-4 mb-4">
              <h2 className="section-title">Fee Structure & Refund Policy</h2>
              <div className="table-responsive mt-3">
                <table className="table table-bordered align-middle">
                  <thead className="bg-light-maroon">
                    <tr>
                      <th>Course</th>
                      <th>Tuition Fee</th>
                      <th>Other Charges</th>
                      <th>Total Annual Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BA Civil Services</td>
                      <td>₹12,000</td>
                      <td>₹3,500</td>
                      <td className="fw-bold">₹15,500</td>
                    </tr>
                    {/* <tr>
                      <td>BCA</td>
                      <td>₹18,000</td>
                      <td>₹4,500</td>
                      <td className="fw-bold">₹22,500</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
              <div className="alert alert-warning mt-3">
                <strong>Refund Policy:</strong> As per UGC Guidelines, 100% refund (less processing fee) if cancelled within 15 days of admission.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DOWNLOADS & REQUIREMENTS */}
          <div className="col-lg-4">
            
            {/* Prospectus Download */}
            <div className="admission-card prospectus-box p-4 mb-4 text-center">
              <h4 className="text-white mb-3">Prospectus 2026-27</h4>
              <i className="bi bi-file-earmark-pdf display-1 text-gold mb-3 d-block"></i>
              <button className="btn btn-gold w-100 fw-bold">DOWNLOAD PDF</button>
            </div>

            {/* Documents Required */}
            <div className="admission-card p-4 mb-4">
              <h5 className="fw-bold text-maroon mb-3 border-bottom pb-2">Required Documents</h5>
              <ul className="doc-list list-unstyled">
                <li><i className="bi bi-check2-circle text-teal"></i> SSC & HSC Marksheets</li>
                <li><i className="bi bi-check2-circle text-teal"></i> Leaving Certificate (TC)</li>
                <li><i className="bi bi-check2-circle text-teal"></i> Caste & Validity Certificate</li>
                <li><i className="bi bi-check2-circle text-teal"></i> Income Certificate (EWS/OBC)</li>
                <li><i className="bi bi-check2-circle text-teal"></i> Aadhaar Card Copy</li>
                <li><i className="bi bi-check2-circle text-teal"></i> 4 Passport Size Photos</li>
              </ul>
            </div>

            {/* Reservation Policy */}
            <div className="admission-card p-4 bg-teal text-white">
              <h5 className="fw-bold mb-2">Reservation Policy</h5>
              <p className="small mb-0">We strictly follow the Government of Maharashtra and UGC Reservation Norms for SC/ST/OBC/VJNT/EWS categories.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}