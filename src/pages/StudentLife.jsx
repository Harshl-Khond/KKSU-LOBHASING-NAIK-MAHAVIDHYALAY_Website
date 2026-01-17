import React from "react";
import "./StudentLife.css";
import support from "../assets/student support.png";

export default function StudentLife() {
  return (
    <div className="student-life-page">

      {/* PAGE HEADER */}
      <section className="student-life-hero">
        <div className="container text-center text-white">
          <h1>Student Life & Welfare</h1>
          <p>
            Ensuring Safety, Inclusivity, Support & Holistic Development of Students
          </p>
        </div>
      </section>

      <div className="container my-5">

        {/* 1. STUDENT SUPPORT SERVICES */}
        <section className="sl-section">
          <img src={support} alt="Student Support" />
          <div>
            <h3>Student Support Services</h3>
            <ul>
              <li>Academic counselling & mentoring system</li>
              <li>Career guidance & competitive exam support</li>
              <li>Psychological & wellness support (as available)</li>
            </ul>
          </div>
        </section>

        {/* 2. GRIEVANCE REDRESSAL */}
        <section className="sl-section reverse">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df" alt="Grievance Redressal" />
          <div>
            <h3>Student Grievance Redressal Committee (SGRC)</h3>
            <ul>
              <li>Committee constituted as per UGC Regulations</li>
              <li>Procedure for grievance submission & resolution</li>
              <li>Contact details displayed on campus & website</li>
              <li>Escalation to University Ombudsperson</li>
            </ul>
          </div>
        </section>

        {/* 3. ANTI-RAGGING */}
        <section className="sl-section">
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350" alt="Anti Ragging" />
          <div>
            <h3>Anti-Ragging Cell</h3>
            <ul>
              <li>Anti-Ragging Committee & Squad</li>
              <li>UGC Anti-Ragging Regulations displayed</li>
              <li>National Helpline: 1800-180-5522</li>
              <li>Zero-tolerance policy towards ragging</li>
            </ul>
          </div>
        </section>

        {/* 4. ICC */}
        <section className="sl-section reverse">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="ICC" />
          <div>
            <h3>Internal Complaints Committee (ICC)</h3>
            <ul>
              <li>Committee as per Sexual Harassment Act, 2013</li>
              <li>Complaint procedure & confidentiality</li>
              <li>Penalties & consequences displayed</li>
              <li>Contact details of ICC members</li>
            </ul>
          </div>
        </section>

        {/* 5. DIVYANGJAN */}
        <section className="sl-section">
          <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d" alt="Divyang Facilities" />
          <div>
            <h3>Facilities for Divyangjan (Differently-Abled)</h3>
            <ul>
              <li>Ramps & barrier-free access</li>
              <li>Accessible washrooms</li>
              <li>Assistive devices & scribes (where applicable)</li>
            </ul>
          </div>
        </section>

        {/* 6. SPORTS */}
        <section className="sl-section reverse">
          <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b" alt="Sports" />
          <div>
            <h3>Sports & Physical Education</h3>
            <ul>
              <li>Indoor & outdoor sports facilities</li>
              <li>Annual sports events</li>
              <li>University & inter-college achievements</li>
            </ul>
          </div>
        </section>

        {/* 7. NCC / NSS */}
        <section className="sl-section">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="NSS NCC" />
          <div>
            <h3>NCC / NSS & Cultural Activities</h3>
            <ul>
              <li>NSS social outreach programs</li>
              <li>National awareness campaigns</li>
              <li>Cultural & co-curricular activities</li>
            </ul>
          </div>
        </section>

        {/* 8. HOSTEL */}
        <section className="sl-section reverse">
          <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5" alt="Hostel" />
          <div>
            <h3>Hostel Facilities</h3>
            <ul>
              <li>Boys & Girls hostel (where applicable)</li>
              <li>Capacity & safety measures</li>
              <li>Hostel rules & regulations</li>
            </ul>
          </div>
        </section>

        {/* 9. PLACEMENT */}
        <section className="sl-section">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Placement" />
          <div>
            <h3>Placement & Career Cell</h3>
            <ul>
              <li>Career guidance & skill training</li>
              <li>Competitive exam support</li>
              <li>Industry interaction programs</li>
            </ul>
          </div>
        </section>

        {/* 10. SCHOLARSHIPS */}
        <section className="sl-section reverse">
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350" alt="Scholarship" />
          <div>
            <h3>Scholarships & Financial Aid</h3>
            <ul>
              <li>Government scholarships</li>
              <li>Institutional financial assistance</li>
              <li>Eligibility & application process</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}
