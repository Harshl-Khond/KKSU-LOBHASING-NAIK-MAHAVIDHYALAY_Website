import "bootstrap/dist/css/bootstrap.min.css";
import "./Administration.css";

export default function Administration() {
  const staffList = [
    { name: "Dr. A. Sharma", subject: "English", designation: "Professor" },
    { name: "Dr. B. Patil", subject: "History", designation: "Associate Professor" },
    { name: "Ms. C. Deshmukh", subject: "Political Science", designation: "Assistant Professor" },
    { name: "Dr. D. Kulkarni", subject: "Commerce", designation: "Professor" },
    { name: "Mr. E. Joshi", subject: "Accounting", designation: "Assistant Professor" },
    { name: "Ms. F. Mehta", subject: "Business Studies", designation: "Assistant Professor" },
    { name: "Dr. G. Rao", subject: "Mathematics", designation: "Professor" },
    { name: "Dr. H. Iyer", subject: "Physics", designation: "Associate Professor" },
  ];

  return (
    <div className="admin-page-root">
      {/* ================= HERO SECTION ================= */}
      <section className="admin-hero">
        <div className="hero-content container">
          <span className="hero-tag">Governance</span>
          <h1 className="display-3 fw-bold">College Administration</h1>
          <p className="lead">Leadership committed to academic integrity and social transformation.</p>
        </div>
      </section>

      <div className="container my-5">
        
        {/* ================= GOVERNING BODY ================= */}
        <section className="admin-card-section mb-5">
          <div className="section-header mb-5">
            <h2 className="text-maroon">Governing & Management Body</h2>
            <div className="gold-underline"></div>
          </div>
          
          <div className="glass-card-premium overflow-hidden shadow-lg">
            <div className="row g-0">
              <div className="col-md-4 profile-accent">
                <img 
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" 
                  alt="Chairperson" 
                  className="chair-img" 
                />
              </div>
              <div className="col-md-8 p-5 d-flex flex-column justify-content-center">
                <h6 className="text-gold text-uppercase ls-2 fw-bold">Chairperson</h6>
                <h2 className="mb-3">Shri XYZ</h2>
                <h5 className="mb-4 text-maroon-light">ABC Education Society (Reg. 1860)</h5>
                <p className="chair-quote">
                  "Our vision is to build an educational ecosystem where rural potential meets global opportunities through disciplined leadership."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HIERARCHY FLOW ================= */}
        <section className="admin-card-section mb-5 py-4">
          <div className="section-header text-center mb-5">
            <h2 className="text-maroon">Administrative Hierarchy</h2>
          </div>
          
          <div className="hierarchy-container">
            <div className="hierarchy-step">Governing Body</div>
            <div className="hierarchy-line"></div>
            <div className="hierarchy-step active">Principal</div>
            <div className="hierarchy-line"></div>
            <div className="hierarchy-step">Heads of Departments</div>
            <div className="hierarchy-line"></div>
            <div className="hierarchy-step">Academic Faculty</div>
          </div>
        </section>

        {/* ================= PRINCIPAL SECTION ================= */}
        <section className="admin-card-section mb-5">
          <div className="row g-4">
            <div className="col-lg-12">
               <div className="principal-spotlight rounded shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-4 text-center p-4">
                      <div className="profile-gold-ring">
                        <img 
                          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" 
                          alt="Principal" 
                          className="principal-img" 
                        />
                      </div>
                    </div>
                    <div className="col-md-8 p-4 p-md-5">
                      <h2 className="text-white mb-1">Dr. ABC</h2>
                      <h4 className="text-gold mb-4">Principal / Head of Institution</h4>
                      <div className="row text-white mb-4">
                        <div className="col-6"><small className="d-block opacity-75">Qualification</small><strong>Ph.D. Education</strong></div>
                        <div className="col-6"><small className="d-block opacity-75">Experience</small><strong>20+ Years</strong></div>
                      </div>
                      <p className="text-white-50">Leading the institution towards excellence through innovative academic planning and strong faculty coordination.</p>
                      <a href="mailto:principal@abccollege.edu" className="btn btn-outline-gold mt-2">Contact Office</a>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* ================= FACULTY GRID ================= */}
        <section className="admin-card-section mb-5">
          <div className="section-header mb-5">
            <h2 className="text-maroon">Academic Administration</h2>
            <div className="gold-underline"></div>
          </div>
          <div className="row g-4">
            {staffList.map((staff, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div className="staff-card-modern">
                  <div className="staff-image-container">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" alt={staff.name} />
                  </div>
                  <div className="staff-body">
                    <h6>{staff.name}</h6>
                    <span className="designation-tag">{staff.designation}</span>
                    <p className="subject-label">{staff.subject}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COMMITTEES TABLE ================= */}
        <section className="admin-card-section mb-5">
          <div className="table-card shadow-lg p-0 rounded-4 overflow-hidden border-0">
             <div className="table-header p-4 bg-maroon">
                <h3 className="text-white mb-0">Statutory Committees</h3>
             </div>
             <div className="table-responsive">
                <table className="table table-hover custom-admin-table mb-0">
                  <thead>
                    <tr>
                      <th>Committee Name</th>
                      <th>Operational Scope</th>
                      <th>Institutional Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["IQAC", "Anti-Ragging", "Grievance Redressal", "ICC", "Admission Committee"].map((item, idx) => (
                      <tr key={idx}>
                        <td><div className="table-dot"></div> {item}</td>
                        <td className="text-muted">Policy & Compliance</td>
                        <td><span className="badge-email">committee@abccollege.edu</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}